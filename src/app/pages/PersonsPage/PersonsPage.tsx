import React, {FC, PropsWithChildren} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {BaseLayout} from '../../layouts/BaseLayout'

import './PersonsPage.scss'

type TProps = TClassName

const mainCssClass = 'persons-page'

export const PersonsPage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className, mainCssClass)}>
      Люди
    </BaseLayout>
  )
}
PersonsPage.displayName = 'PersonsPage'