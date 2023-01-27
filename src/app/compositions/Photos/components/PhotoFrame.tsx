import React, {memo, FC} from 'react'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {TClassName} from '../../../../core/types'

import './PhotoFrame.scss'

type TProps = {

} & TClassName

const mainCssClass = 'photo-frame'

export const PhotoFrame: FC<TProps> = memo<TProps>(({
  className
})=> {
  return (
    <div className={cssClasses(className, mainCssClass)}>
      Photos
    </div>
  )
})
PhotoFrame.displayName = 'PhotoFrame'