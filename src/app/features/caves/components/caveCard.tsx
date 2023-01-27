import React, {FC, memo, useCallback, useEffect, useState, useMemo} from 'react'
import {getCavePreviewData, TGetCaveShortDataResponseBody} from '../../../../api/caves'
import {TDictionary} from '../../../../api/dictionaries'
import {changeUrl} from '../../../../core/hooks/urlHooks'
import {TClassName, TUuid, TReadonly, TDisabled} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../../core/uic/ProcessIndicator'
import {Link, TOnClick} from '../../../../core/uic/Link'

import './caveCard.scss'

type TProps = {
  countries: TDictionary
} & TClassName & TUuid & TReadonly & TDisabled

const mainCssClass = 'cave-card'

export const CaveCard: FC<TProps> = memo<TProps>(({
  className,
  readonly,
  disabled,
  uuid,
  countries
}) => {
  const [processing, setProcessing] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<TGetCaveShortDataResponseBody | null>(null)
  const targetUrl: string = useMemo(() => {
    return data?.alias || uuid ? `./caves/${data?.alias || uuid}` : './404'
  }, [uuid, data])

  const handleOpen: TOnClick = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
    changeUrl(targetUrl)
  }, [targetUrl])

  const handleGetData = useCallback(async () => {
    if (uuid) {
      try {
        setProcessing(true)
        const response: TGetCaveShortDataResponseBody = await getCavePreviewData(uuid)
        if (response) {
          setData(response)
        }
      } catch (error) {
        setError('Ошибка')
      } finally {
        setProcessing(false)
      }
    }
  }, [uuid])

  useEffect(() => {
    handleGetData()
  }, [handleGetData])

  return (
    <div className={cssClasses(className, mainCssClass)}>
      <div className={`${mainCssClass}__photo`}/>
      <div className={`${mainCssClass}__content`}>
        {processing && (
          <ProcessIndicator className={`${mainCssClass}__indicator`}/>
        )}
        {!processing && error && (
          <div className={`${mainCssClass}__error`}>Ошибочка вышла</div>
        )}
        {!processing && !error && !data && (
          <div className={`${mainCssClass}__empty-data`}>Кажется тут пусто</div>
        )}
        {!processing && !error && data && (
          <div className={`${mainCssClass}__data`}>
            <h3 className={`${mainCssClass}__name`}>
              <Link
                className={`${mainCssClass}__link`}
                text={`п. ${data.name}`}
                type={'text'}
                href={targetUrl}
                readonly={readonly}
                disabled={disabled}
                onClick={handleOpen}
              />
            </h3>
            <div className={`${mainCssClass}__meta`}>
              {data?.country && (
                <span
                  className={`${mainCssClass}__meta-item`}
                >
                {`${countries?.find(({key}) => key === data?.country)?.value ?? data?.country};`}
              </span>
              )}
              {data?.length && (
                <span
                  className={`${mainCssClass}__meta-item`}
                >
                {`Длина: ${data?.length}м;`}
              </span>
              )}
              {data?.deep && (
                <span
                  className={`${mainCssClass}__meta-item`}
                >
                {`Глубина: ${data?.deep}м;`}
              </span>
              )}
            </div>
            <p className={`${mainCssClass}__description`}>
              {data?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
})
CaveCard.displayName = 'CaveCard'
