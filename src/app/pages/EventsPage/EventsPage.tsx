import React, {FC, PropsWithChildren} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {BaseLayout} from '../../layouts/BaseLayout'

import './EventsPage.scss'

type TProps = TClassName

const mainCssClass = 'events-page'

export const EventsPage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className)}>
      События
    </BaseLayout>
  )
}
EventsPage.displayName = 'EventsPage'