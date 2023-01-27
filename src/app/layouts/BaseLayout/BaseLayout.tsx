import React, {memo, FC, PropsWithChildren} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {Header} from '../../components/header'
import {Menu} from '../../components/menu'

import './BaseLayout.scss'

type TProps = TClassName

const mainCssClass = 'base-layout'

export const BaseLayout: FC<PropsWithChildren<TProps>> = memo<PropsWithChildren<TProps>>(({
  className,
  children
}) => {
  return (
    <div className={cssClasses(className, mainCssClass)}>
      <div className={`${mainCssClass}__header`}>
        <Header/>
      </div>
      <div className={`${mainCssClass}__body`}>
        <div className={`${mainCssClass}__menu`}>
          <Menu/>
        </div>
        <div className={`${mainCssClass}__content`}>
          {children}
        </div>
      </div>
    </div>
  )
})
BaseLayout.displayName = 'BaseLayout'