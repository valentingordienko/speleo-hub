import React, {memo, FC} from 'react'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {TClassName} from '../../../../core/types'

import './Photos.scss'

type TProps = {

} & TClassName

const mainCssClass = 'photos'

export const Photos: FC<TProps> = memo<TProps>(({
  className
})=> {
  return (
    <div className={cssClasses(className, mainCssClass)}>
      Photos
    </div>
  )
})
Photos.displayName = 'Photos'