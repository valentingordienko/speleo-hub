import React, {FC, memo, useMemo, CSSProperties} from 'react'
import {cssClasses} from '../../utils/cssClasses'
import {TClassName, TSize} from '../../types'

import './Avatar.scss'

type TProps = {
  src?: string
} & TClassName & TSize

const mainCssClass = 'avatar'

export const Avatar: FC<TProps> = memo<TProps>(({
  className,
  src,
  size = 'm'
}) => {
  const style: CSSProperties = useMemo(()=> {
    return {
      backgroundImage: `url(${process.env.PUBLIC_URL}${src})`,
    }
  }, [src])

  return (
    <span style={style} className={cssClasses(className, mainCssClass, `${mainCssClass}_${size}`)}/>
  )
})
Avatar.displayName = 'Avatar'
