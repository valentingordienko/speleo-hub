import React, {FC, useState, useCallback} from 'react'
import {useUrlListener} from '../../../core/hooks/urlHooks'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../core/uic/ProcessIndicator'
import {BaseLayout} from '../../layouts/BaseLayout'

import './MainPage.scss'

type TProps = TClassName

const mainCssClass = 'main-page'

export const MainPage: FC<TProps> = (props) => {
  const {className} = props
  return (
    <BaseLayout className={cssClasses(className)}>
      <div>Главная страница</div>
    </BaseLayout>
  )
}