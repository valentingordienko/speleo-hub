import React, {memo, FC, useCallback, MouseEventHandler} from 'react'
import {Button, TProps as TButtonProps} from '../Button'

type TProps = {
  href: string
  title?: string
} & TButtonProps

export const RouterLink: FC<TProps> = memo<TProps>(({
  href,
  title= '',
  onClick,
  ...props
})=> {

  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event)=> {
    window.history.pushState({}, title, href)
    window.dispatchEvent(new Event('popstate'))
    if(onClick) {
      onClick(event)
    }
  }, [href, onClick])

  return (
    <Button
      {...props}
      onClick={handleClick}
    />
  )
})
RouterLink.displayName = 'RouterLink'