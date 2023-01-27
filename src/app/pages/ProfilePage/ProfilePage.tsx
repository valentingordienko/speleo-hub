import React, {FC, PropsWithChildren} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {BaseLayout} from '../../layouts/BaseLayout'

import './ProfilePage.scss'

type TProps = TClassName

const mainCssClass = 'profile-page'

export const ProfilePage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className, mainCssClass)}>
      Профиль
    </BaseLayout>
  )
}
ProfilePage.displayName = 'ProfilePage'