import React, {FC, PropsWithChildren} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {BaseLayout} from '../../layouts/BaseLayout'

import './CavesPage.scss'

type TProps = TClassName

const mainCssClass = 'caves-page'

export const CavesPage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className, mainCssClass)}>
      Пещеры
    </BaseLayout>
  )
}
CavesPage.displayName = 'CavesPage'