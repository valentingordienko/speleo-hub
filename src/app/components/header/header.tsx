import React, {FC} from 'react'
import {TClassName} from '../../../core/types'
import {cssClasses} from '../../../core/utils/cssClasses'
import {Avatar} from '../../../core/uic/Avatar'
import {getUserPhoto} from '../../utils/src'
import {Logo} from '../logo'

import './header.scss'

const mainCssClass = 'header'

export const Header: FC<TClassName> = ({
  className
}) => {
  return (
    <div className={cssClasses(className, mainCssClass)}>
      <Logo/>
      <div></div>
      <Avatar
        src={getUserPhoto('a4be234d-b5f6-4b24-b186-e01630273c95','176cd6d4-3bce-48e1-8801-f5e095eab857.jpg')}
      />
    </div>
  )
}
Header.displayName = 'Header'