import React, {FC, PropsWithChildren, useMemo} from 'react'
import {createGenericContext} from "../../core/context"

export type TStaticValues = {
    appName: string
}

export type TDynamicValues = {
    [p: string]: any
}

export type TGlobalContext = TStaticValues & TDynamicValues

const staticValues: TStaticValues = {
    appName: 'Speleo-Hub.ru'
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