import React, {FC, PropsWithChildren} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {BaseLayout} from '../../layouts/BaseLayout'

import './GroupsPage.scss'

type TProps = TClassName

const mainCssClass = 'groups-page'

export const GroupsPage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className, mainCssClass)}>
      Сообщества
    </BaseLayout>
  )
}
GroupsPage.displayName = 'GroupsPage'