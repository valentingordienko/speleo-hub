import React, {FC} from "react";
import {cssClasses} from '../../utils/cssClasses'
import {TClassName, TReadonly, TDisabled} from '../../types'

import './Button.scss'

type TProps = {
    text: string
    type?: 'simple' | 'outline' | 'transparent' | 'text'
} & TClassName & TDisabled & TReadonly

const mainCssClass = 'button'

export const Button: FC<TProps> = (props) => {
    const {
        className,
        readonly,
        disabled,
        text,
        type = 'simple'
    } = props
    const classes = cssClasses(className, mainCssClass, {
        [`${mainCssClass}_simple`]: type === 'simple',
        [`${mainCssClass}_outline`]: type === 'outline',
        [`${mainCssClass}_transparent`]: type === 'transparent',
        [`${mainCssClass}_text`]: type === 'text'
    })
    return (
        <button
            className={classes}
            disabled={readonly || disabled}
        >
            {text}
        </button>
    )
}
Button.displayName = 'Button'