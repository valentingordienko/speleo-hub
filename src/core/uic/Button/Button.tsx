import React, {memo, FC, HTMLAttributes, MouseEventHandler, useCallback, MouseEvent} from 'react'
import {cssClasses} from '../../utils/cssClasses'
import {TBaseProps as TIconBaseProps} from '../../icons/Icon'
import {TClassName, TReadonly, TDisabled, TMetaData} from '../../types'

import './Button.scss'

export type TOnClick = (event: MouseEvent<HTMLButtonElement>, metaData?: TMetaData['metaData']) => void

export type TProps = {
  text: string
  type?: 'simple' | 'outline' | 'transparent' | 'text'
  leftIcon?: FC<TIconBaseProps>
  rightIcon?: FC<TIconBaseProps>
  onClick?: TOnClick
} & TClassName & TDisabled & TReadonly & TMetaData/* & Exclude<HTMLAttributes<HTMLButtonElement>, 'onClick'>*/

const mainCssClass = 'button'

export const Button: FC<TProps> = memo<TProps>(({
  className,
  readonly,
  disabled,
  text,
  type = 'simple',
  leftIcon,
  rightIcon,
  onClick,
  metaData,
  ...restProps
}) => {
  const buttonClass = `${mainCssClass}__button`
  const classes = cssClasses(className, mainCssClass, {
    [`${mainCssClass}_simple`]: type === 'simple',
    [`${mainCssClass}_outline`]: type === 'outline',
    [`${mainCssClass}_transparent`]: type === 'transparent',
    [`${mainCssClass}_text`]: type === 'text'
  })

  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event)=> {
    if(onClick) {
      onClick(event, metaData)
    }
  }, [metaData, onClick])

  return (
    <button
      type="button"
      className={classes}
      disabled={readonly || disabled}
      onClick={handleClick}
      {...restProps}
    >
      {leftIcon?.({size: 'xs', className: `${mainCssClass}__left-icon`})}
      {text}
      {rightIcon?.({size: 'xs', className: `${mainCssClass}__right-icon`})}
    </button>
  )
})
Button.displayName = 'Button'