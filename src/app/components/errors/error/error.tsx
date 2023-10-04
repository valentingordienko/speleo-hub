import React, { FC, memo, PropsWithChildren } from 'react'
import {TClassName} from "../../../../core/types";
import { cssClasses } from '../../../../core/utils/cssClasses'

import './error.scss'

export type TProps = PropsWithChildren<{
    code: number
    description: string[]
} & TClassName>

const mainCssClass = 'error'

export const Error: FC<TProps> = memo<TProps>(({
    className,
    code,
    description,
    children
}) => {
    return (
        <div className={cssClasses(className, mainCssClass)}>
            <div className={`${mainCssClass}__code`}>{code}</div>
            <div className={`${mainCssClass}__description`}>
                {description.map((text)=> {
                    return (
                        <div key={text} className={`${mainCssClass}__description-item`}>
                            {text}
                        </div>
                    )
                })}
            </div>
            {!!children && (
                <div className={`${mainCssClass}__children`}>{children}</div>
            )}
        </div>
    )
})

