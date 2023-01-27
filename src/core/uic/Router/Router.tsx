import React, {
  memo,
  FC,
  PropsWithChildren,
  useCallback,
  useState
} from 'react'
import {TClassName} from '../../types'
import {cssClasses} from '../../utils/cssClasses'
import {useUrlListener} from '../../hooks/urlHooks'

type TProps = PropsWithChildren<{
} & TClassName>



export const Router: FC<TProps> = memo<TProps>(({
  children,
  className
}) => {
  const [path, setPath] = useState<string | null>(null)
  const handlePathChange = useCallback<Parameters<typeof useUrlListener>[0]>((event, path)=> {
    console.log(path)
  }, [])

  useUrlListener(handlePathChange)

  return <>{children}</>
})
Router.displayName = 'Router'
