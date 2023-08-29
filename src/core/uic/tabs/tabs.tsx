import React, {memo, FC} from 'react'
import {TClassName} from '../../types'
import {cssClasses} from '../../utils/cssClasses'
import {Button, TProps as TButtonProps} from '../Button'

import './tabs.scss'

const mainCssClass = 'uic-tabs'

type TTab = {
  key: string
} & Omit<TButtonProps, 'type'>

export type TProps = {
  items: TTab[]
} & TClassName

export const Tabs: FC<TProps> = memo<TProps>(({
  className,
  items
}) => {
  return (
    <div className={cssClasses(className, mainCssClass)}>
      {items.map(({ key, className: tabClassName, ...restProps })=> {
        const tabCssClass = `${mainCssClass}__tab`
        return (
          <Button
            key={key}
            className={cssClasses(tabClassName, tabCssClass)}
            type="text"
            {...restProps}
          />
        )
      })}
    </div>
  )
})
Tabs.displayName = 'Tabs'