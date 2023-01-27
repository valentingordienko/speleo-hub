import React, {FC, memo} from 'react'
import {TClassName} from '../../types'
import {cssClasses} from '../../utils/cssClasses'
import {TBaseProps, SpinnerSolid} from '../../icons'

import './ProcessIndicator.scss'

type TProps = {
  size?: TBaseProps['size']
} & TClassName

const mainCssClass = 'process-indicator'

export const ProcessIndicator: FC<TProps> = memo<TProps>(({
  className,
  size
}) => {
  return (
    <SpinnerSolid
      className={cssClasses(className, mainCssClass)}
      iconClassName={`${mainCssClass}__icon`}
      size={size}
    />
  )
})
ProcessIndicator.displayName = 'ProcessIndicator'