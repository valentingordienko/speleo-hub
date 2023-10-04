import React, {memo, useState, FC, useCallback} from 'react'
import {TClassName} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {Button, TOnClick} from '../../../../core/uic/Button'
import {Input} from '../../../../core/uic/input'
import {Label} from '../../../../core/uic/label'

import './signForm.scss'

const mainCssClass = 'sign-form'

export const SignForm: FC<TClassName> = memo<TClassName>(({
	className
}) => {
	const handleKey = useCallback(() => {

	}, [])

	const handleClick = useCallback(() => {

	}, [])

	return (
		<form name="sign-form" className={cssClasses(className, mainCssClass)}>
			<div className={`${mainCssClass}__fields`}>
				<Label
					name="e-mail"
					text="Эл-почта"
					required
				>
					<Input
						name="e-mail"
						placeholder="Введите адресс эл-почты"
					/>
				</Label>
				<Label
					name="password"
					text="Пароль"
					required
				>
					<Input
						name="password"
						placeholder="Введите пароль"
					/>
				</Label>
				<Label
					name="password"
					text="Пароль ещё раз"
					required
				>
					<Input
						name="password"
						placeholder="Повторите пароль"
					/>
				</Label>
			</div>
			<div className={`${mainCssClass}__buttons`}>
				<Button
					className={`${mainCssClass}__button`}
					type="outline"
					text="Регистрация"
					onClick={handleClick}
				/>
			</div>
		</form>
	)
})
SignForm.displayName = 'SignForm'
