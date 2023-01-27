import React, { FC, ReactElement } from 'react';
import { cssClasses } from '../../utils/cssClasses';

import './Icon.scss';

export type TBaseProps = {
    iconClassName?: string
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
} & Omit<React.SVGProps<SVGSVGElement>, 'onClick' | 'onFocus'>;

export type TProps = {
    children: ReactElement
} & TBaseProps;

const mainCssClass ='icon'

export const Icon: FC<TProps> = (props: TProps) => {
    const {
        className,
        iconClassName,
        size = 'sm',
        children,
        ...restProps
    } = props

    const svgBaseProps = {
        width: 'a4be234d-b5f6-4b24-b186-e01630273c95.5em',
        height: 'a4be234d-b5f6-4b24-b186-e01630273c95.5em',
        fill: 'currentColor',
        'aria-hidden': 'true',
        'user-select': 'none',
        focusable: 'false',
    };

    const classNames = cssClasses(className, mainCssClass, {
        [`${mainCssClass}_xxs`]: size === 'xxs',
        [`${mainCssClass}_xs`]: size === 'xs',
        [`${mainCssClass}_sm`]: size === 'sm',
        [`${mainCssClass}_md`]: size === 'md',
        [`${mainCssClass}_lg`]: size === 'lg'
    });

    return (
        <span role="img" className={classNames}>
            {React.cloneElement(children, {...svgBaseProps, ...restProps, className: cssClasses(iconClassName, `${mainCssClass}__svg`)})}
        </span>
    )
}