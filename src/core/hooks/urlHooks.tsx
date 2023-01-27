import React, {useEffect} from 'react'

export const useUrlListener = (listener: (event: PopStateEvent, path: string) => void) => {
  return useEffect(() => {
    const eventListener = (event: PopStateEvent) => {
      listener(event, window.location.pathname)
    }
    window.addEventListener('popstate', eventListener)
    return () => {
      window.removeEventListener('popstate', eventListener)
    }
  }, [listener])
}

export const changeUrl = (href: string | null, data: any = {}) => {
  window.history.pushState(data, '', href || '/')
  window.dispatchEvent(new Event('popstate'))
}
