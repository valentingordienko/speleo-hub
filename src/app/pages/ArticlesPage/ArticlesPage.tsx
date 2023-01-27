import React, {FC, PropsWithChildren} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {BaseLayout} from '../../layouts/BaseLayout'

import './ArticlesPage.scss'

type TProps = TClassName

const mainCssClass = 'articles-page'

export const ArticlesPage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className, mainCssClass)}>
      Статьи
    </BaseLayout>
  )
}
ArticlesPage.displayName = 'ArticlesPage'