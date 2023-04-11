import React, {FC, memo, useCallback, useEffect, useState, useMemo} from 'react'
import {getUserPreviewData, TGetUserPreviewResponseBody} from '../../../../api/users'
import {TDictionary} from '../../../../api/dictionaries'
import {changeUrl} from '../../../../core/hooks/urlHooks'
import {TClassName, TUuid, TReadonly, TDisabled} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../../core/uic/ProcessIndicator'
import {Link, TOnClick} from '../../../../core/uic/Link'
import {Avatar} from '../../../../core/uic/Avatar'

import './personCard.scss'
import {getUserPhoto} from '../../../utils/src'

type TProps = {
  countries?: TDictionary
} & TClassName & TUuid & TReadonly & TDisabled

const mainCssClass = 'person-card'

export const PersonCard: FC<TProps> = memo<TProps>(({
  className,
  readonly,
  disabled,
  uuid,
  countries
}) => {
  const [processing, setProcessing] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<TGetUserPreviewResponseBody | null>(null)
  const targetUrl: string = useMemo(() => {
    return data?.alias || uuid ? `./persons/${data?.alias || uuid}` : './404'
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
        const response: TGetUserPreviewResponseBody = await getUserPreviewData(uuid)
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
      <Avatar
        className={`${mainCssClass}__photo`}
        size={'xl'}
        src={data?.photo ? getUserPhoto(data?.uuid, data?.photo) : ''}
      />
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
                text={`${data.firstName} ${data.lastName}`}
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
              {data?.city && (
                <span
                  className={`${mainCssClass}__meta-item`}
                >
                {data.city}
              </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
})
PersonCard.displayName = 'PersonCard'
