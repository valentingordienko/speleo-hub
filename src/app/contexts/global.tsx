import React, {FC, PropsWithChildren, useEffect, useMemo} from 'react'
import {createGenericContext} from '../../core/context'
import cookies from '../utils/cookies'

export type TStaticValues = {
  appName: string
  hasSession: boolean
}

export type TDynamicValues = {
  [p: string]: any
}

export type TGlobalContext = TStaticValues & TDynamicValues

const staticValues: TStaticValues = {
  appName: 'Speleo-Hub.ru',
  hasSession: !!cookies.get('jwt')
}

const [useContext, ContextProvider] = createGenericContext<TGlobalContext>(staticValues)

export const GlobalContext: FC<PropsWithChildren> = ({children}) => {
  const value: TGlobalContext = useMemo(() => ({
    ...staticValues
  }), [])

  return (
    <ContextProvider value={value}>
      {children}
    </ContextProvider>
  )
}

export const useGlobalContext = useContext