import React, {memo, FC, useRef, useCallback} from 'react'
import {TBaseProps as TIconBaseProps} from '../../icons'
import {TClassName, TDisabled, TMetaData, TReadonly, TTabIndex} from '../../types'
import {cssClasses} from '../../utils/cssClasses'

import './input.scss'

const mainCssClass = 'uic-input'

export type TProps = {
  leftIcon?: FC<TIconBaseProps>
  rightIcon?: FC<TIconBaseProps>
} & TClassName & TDisabled & TReadonly & TTabIndex & TMetaData

export const Input: FC<TProps> = memo<TProps>(({
  className,
  leftIcon,
  rightIcon,
}) => {
  const wrapper = useRef(null)

  return (
    <div ref={wrapper} className={cssClasses(className, mainCssClass)} onFocus={()=> { console.log('Marker is here!'); }}>
      {leftIcon?.({size: 'xs', className: `${mainCssClass}__left-icon`})}
      <input className={`${mainCssClass}__input`} type="text"/>
      {rightIcon?.({size: 'xs', className: `${mainCssClass}__right-icon`})}
    </div>
  )
})
Input.displayName = 'Input'