import React, {FC, memo, PropsWithChildren, useEffect, useState, useCallback} from 'react'
import cookies from '../../utils/cookies'

export const Private: FC<PropsWithChildren> = memo(({
  children
}) => {
  const [hasSession, setHasSession] = useState<boolean>(!!cookies.get('jwt'))

  useEffect(() => {
    const eventName = 'change'

    const setCookiesCallback = () => {
      setHasSession(!!cookies.get('jwt'))
    }
    // @ts-ignore
    window.cookieStore.addEventListener(eventName, setCookiesCallback)

    return ()=> {
      // @ts-ignore
      window.cookieStore.removeEventListener(eventName, setCookiesCallback)
    }
  }, [])

  return hasSession ? <>{children}</> : <div>403</div>
})
Private.displayName = 'Private'