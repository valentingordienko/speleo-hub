import React, {FC, memo, PropsWithChildren} from 'react'
import {cssClasses} from "../../utils/cssClasses"
import {TClassName} from "../../types"

import './label.scss'

const mainCssClass = 'uic-label'

export type TProps = PropsWithChildren<{
    name: string
    text: string
    required?: boolean
} & TClassName>

export const Label: FC<TProps> = memo<TProps>(({
    className,
    name,
    text,
    required = false,
    children
}) => {
    return (
        <div className={cssClasses(className, mainCssClass)}>
            <label htmlFor={name} className={`${mainCssClass}__label`}>
                {text}
                {required && <span className={`${mainCssClass}__required-sign`}>*</span>}
            </label>
            {children}
        </div>
    )
})
