import {createContext, useContext, Provider} from 'react'

export const createGenericContext = <T = {}>(defaultValue: T): [() => T, Provider<T>] => {
    const genericContext = createContext<T>(defaultValue)
    const useGenericContext = (): T => useContext(genericContext)
    return [useGenericContext, genericContext.Provider]
}
