import React, {FC, useCallback} from 'react'
import {changeUrl} from '../../../core/hooks/urlHooks'
import {cssClasses} from '../../../core/utils/cssClasses'
import {TClassName} from '../../../core/types'
import {Button} from '../../../core/uic/Button'
import {HomeOutline} from '../../../core/icons'
import {useGlobalContext} from '../../contexts/global'
import './logo.scss'

const mainCssClass = 'logo'

export const Logo: FC<TClassName> = ({
  className
}) => {
  const globalContext = useGlobalContext()

  const handleClick = useCallback(()=> {
    changeUrl('')
  }, [])

  return (
    <Button
      className={cssClasses(className, mainCssClass)}
      text={globalContext?.appName}
      type="text"
      leftIcon={HomeOutline}
      onClick={handleClick}
    />
  )
}
Logo.displayName = 'Logo'
