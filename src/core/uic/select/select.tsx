import React, {memo, FC} from 'react'
import {TClassName} from '../../types'
import {cssClasses} from '../../utils/cssClasses'
import {TBaseProps as TIconBaseProps} from '../../icons'

import './select.scss'

const mainCssClass = 'uic-select'

type TOption = {
	key: string
	value: string
	leftIcon?: FC<TIconBaseProps>
	rightIcon?: FC<TIconBaseProps>
}

export type TProps = {
	name?: string
	items: TOption[]
} & TClassName

export const Select: FC<TProps> = memo<TProps>(({
	className,
	name,
	items
}) => {
	return (
		<select
			className={cssClasses(className, mainCssClass)}
			name={name}
		>
			{items.map(({ key, value }) => {
				return (
					<option
						key={key}
						value={value}
						className={cssClasses(className, `${mainCssClass}__option`)}
					>{value}</option>
				)
			})}
		</select>
	)
})
Select.displayName = 'Select'
