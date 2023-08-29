import React, {memo, useMemo, FC, useCallback} from 'react'
import {TClassName} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {Tabs, TProps as TTabsProps} from '../../../../core/uic/tabs'
import {Button} from '../../../../core/uic/Button'
import {Input} from '../../../../core/uic/input'

import './auth.scss'

const mainCssClass = 'auth'

export const Auth: FC<TClassName> = memo<TClassName>(({
  className
}) => {
  const tabs: TTabsProps['items'] = useMemo(()=> {
    return [
      {
        key: 'sign-in',
        text: 'Вход'
      },
      {
        key: 'sign-out',
        text: 'Регистрация'
      }
    ]
  }, [])

  const handleKey = useCallback(()=> {

  }, [])

  const handleClick = useCallback(()=> {

  }, [])

  return (
    <div className={cssClasses(className, mainCssClass)}>
      <div className={`${mainCssClass}__form`} onKeyUp={handleKey}>
        <div className={`${mainCssClass}__header`}>
          <Tabs
            className={`${mainCssClass}__tabs`}
            items={tabs}
          />
        </div>
        <div className={`${mainCssClass}__fields`}>
          <Input/>
          <Input/>
        </div>
        <div className={`${mainCssClass}__buttons`}>
          <Button
            className={`${mainCssClass}__button`}
            text="Вход / Регистрация"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
})
Auth.displayName = 'Auth'