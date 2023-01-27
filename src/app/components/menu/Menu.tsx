import React, {memo, FC, useCallback, useMemo, useState, useEffect} from 'react'
import {TClassName} from '../../../core/types'
import {Button, TOnClick as TOnButtonClick} from '../../../core/uic/Button'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {cssClasses} from '../../../core/utils/cssClasses'
import {changeUrl} from '../../../core/hooks/urlHooks'
import {IconsMap} from '../../../core/icons'
import {
  getMenu as fetchGetMenu,
  TGetMenuResponseBody
} from '../../../api/menu'

import './Menu.scss'

const mainCssClass = 'menu'

export const Menu: FC<TClassName> = memo<TClassName>(({
  className
}) => {
  const [processing, setProcessing] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<TGetMenuResponseBody | null>(null)

  const handleClick = useCallback<TOnButtonClick>((event, metaData) => {
    if (typeof metaData === 'string') {
      changeUrl(metaData)
    }
  }, [])

  const handleGetData = useCallback(async () => {
    try {
      setProcessing(true)
      const response: TGetMenuResponseBody = await fetchGetMenu()
      if (response) {
        setData(response)
      }
    } catch (error) {
      setError('Ошибка')
    } finally {
      setProcessing(false)
    }
  }, [])

  useEffect(() => {
    handleGetData()
  }, [handleGetData])

  return (
    <menu className={cssClasses(className, mainCssClass)}>
      {processing && (
        <ProcessIndicator/>
      )}
      {!processing && (
        <ol className={`${mainCssClass}__list`}>
          {data?.map(({key, value, icon}, index) => {
            return (
              <li
                key={`${key}_${index}`}
                className={`${mainCssClass}__item`}
              >
                <Button
                  className={`${mainCssClass}__item-button`}
                  text={value}
                  type="transparent"
                  leftIcon={IconsMap[icon]}
                  metaData={`/${key}`}
                  onClick={handleClick}
                />
              </li>
            )
          })}
        </ol>
      )}
    </menu>
  )
})
Menu.displayName = 'Menu'
