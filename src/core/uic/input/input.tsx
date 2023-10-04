import React, {memo, FC, useRef} from 'react'
import {TBaseProps as TIconBaseProps} from '../../icons'
import {TClassName, TDisabled, TMetaData, TReadonly, TTabIndex} from '../../types'
import {cssClasses} from '../../utils/cssClasses'

import './input.scss'

const mainCssClass = 'uic-input'

export type TProps = {
  leftIcon?: FC<TIconBaseProps>
  rightIcon?: FC<TIconBaseProps>
  name: string
  placeholder?: string
  required?: boolean
} & TClassName & TDisabled & TReadonly & TTabIndex & TMetaData

export const Input: FC<TProps> = memo<TProps>(({
  className,
  leftIcon,
  rightIcon,
  name,
  placeholder,
  required
}) => {
  const inputContainer = useRef(null)
    return (
          <div ref={inputContainer} className={cssClasses(className, mainCssClass)}>
            {leftIcon?.({size: 'xs', className: `${mainCssClass}__left-icon`})}
            <input
                className={`${mainCssClass}__input`}
                type="text"
                name={name}
                placeholder={placeholder}
                required={required}
            />
            {rightIcon?.({size: 'xs', className: `${mainCssClass}__right-icon`})}
          </div>
    )
})
Input.displayName = 'Input'
