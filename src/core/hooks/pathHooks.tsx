import React, {memo, useCallback, useEffect} from 'react'

export const usePathListener = (listener: (event: PopStateEvent, path: string)=> void) => {
  return useEffect(() => {
    const eventListener = (event: PopStateEvent) => {
      listener(event, window.location.pathname)
    }
    window.addEventListener('popstate', eventListener)
    window.dispatchEvent(new Event('popstate'))
    return () => {
      window.removeEventListener('popstate', eventListener)
    }
  }, [listener])
}

export const usePathChanger = () => {
  return useCallback((href: string | null, data: any = {})=> {
    window.history.pushState(data, '', href || '/')
    window.dispatchEvent(new Event('popstate'))
  }, [])
}