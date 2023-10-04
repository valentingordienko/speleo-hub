import React, {memo, useState, FC, useCallback, FormEventHandler} from 'react'
import {TClassName} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {Button, TOnClick} from '../../../../core/uic/Button'
import {Input} from '../../../../core/uic/input'
import {Label} from '../../../../core/uic/label'
import {Select} from '../../../../core/uic/select'

import './authForm.scss'

const mainCssClass = 'auth-form'

export const AuthForm: FC<TClassName> = memo<TClassName>(({
	className
}) => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
		event.preventDefault()
		// @ts-ignore
		const values = Array.prototype.reduce.apply<Record<string, string>>(document.forms['auth-form'].elements, [(result, item) => {
			result[item.name] = item.value
			return result
		}, {}])
		console.log(values)
	}, [])

	return (
		<form
			name="auth-form"
			className={cssClasses(className, mainCssClass)}
			onSubmit={handleSubmit}
		>
			<div className={`${mainCssClass}__fields`}>
				<Label
					name="e-mail"
					text="Эл-почта"
					required
				>
					<Input
						name="e-mail"
						placeholder="Введите адресс эл-почты"
						required
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
						required
					/>
				</Label>
				<Label
					name="country"
					text="Страна"
					required
				>
					<Select
						name="country"
						items={[
							{
								key: 'russia',
								value: 'Россия'
							},
							{
								key: 'china',
								value: 'Китай'
							}
						]}
					/>
				</Label>
			</div>
			<div className={`${mainCssClass}__buttons`}>
				<Button
					className={`${mainCssClass}__button`}
					type="outline"
					htmlType="submit"
					text="Вход"
				/>
			</div>
		</form>
	)
})
AuthForm.displayName = 'AuthForm'
