import React, {FC} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {Photos} from '../../compositions/Photos'
import {BaseLayout} from '../../layouts/BaseLayout'

import './PhotosPage.scss'

type TProps = TClassName

const mainCssClass = 'photos-page'

export const PhotosPage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className, mainCssClass)}>
      <Photos/>
    </BaseLayout>
  )
}
PhotosPage.displayName = 'PhotosPage'