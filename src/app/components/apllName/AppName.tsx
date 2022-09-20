import React, { FC} from 'react'
import { useGlobalContext } from '../../contexts/global'

export const AppName: FC = () => {
    const globalContext = useGlobalContext()
    console.log(globalContext?.appName);
    return (
        <div>{globalContext?.appName}</div>
    )
}
AppName.displayName = 'AppName'