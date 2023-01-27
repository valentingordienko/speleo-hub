import React, {memo, FC, MouseEventHandler, useCallback, MouseEvent, ReactElement} from 'react'
import {changeUrl} from '../../hooks/urlHooks'
import {cssClasses} from '../../utils/cssClasses'
import {TBaseProps as TIconBaseProps} from '../../icons/Icon'
import {TClassName, TReadonly, TDisabled, TMetaData} from '../../types'

import './Link.scss'

export type TOnClick = (event: MouseEvent<HTMLAnchorElement>, metaData?: TMetaData['metaData']) => void

export type TProps = {
  text: string | ReactElement
  href: string
  type?: 'simple' | 'outline' | 'transparent' | 'text'
  leftIcon?: FC<TIconBaseProps>
  rightIcon?: FC<TIconBaseProps>
  onClick?: TOnClick
} & TClassName & TDisabled & TReadonly & TMetaData/* & Exclude<HTMLAttributes<HTMLButtonElement>, 'onClick'>*/

const mainCssClass = 'uic-link'

export const Link: FC<TProps> = memo<TProps>(({
  className,
  readonly,
  disabled,
  href,
  text,
  type = 'simple',
  leftIcon,
  rightIcon,
  onClick,
  metaData,
  ...restProps
}) => {
  const classes = cssClasses(className, mainCssClass, {
    [`${mainCssClass}_read-only`]: !!readonly,
    [`${mainCssClass}_disabled`]: !!disabled,
    [`${mainCssClass}_simple`]: type === 'simple',
    [`${mainCssClass}_outline`]: type === 'outline',
    [`${mainCssClass}_transparent`]: type === 'transparent',
    [`${mainCssClass}_text`]: type === 'text'
  })

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>((event) => {
    if (readonly || disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    if (onClick) {
      onClick(event, metaData)
    } else {
      event.preventDefault()
      event.stopPropagation()
      changeUrl(href)
    }
  }, [readonly, disabled, href, metaData, onClick])

  return (
    <a
      className={classes}
      href={href}
      onClick={handleClick}
      {...restProps}
    >
      {leftIcon?.({size: 'xs', className: `${mainCssClass}__left-icon`})}
      {text}
      {rightIcon?.({size: 'xs', className: `${mainCssClass}__right-icon`})}
    </a>
  )
})
Link.displayName = 'Link'
