import React, {memo, useState, FC, useCallback} from 'react'
import {TClassName} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {Button, TOnClick} from '../../../../core/uic/Button'
import {AuthForm} from './authForm'
import {SignForm} from './signForm'

import './auth.scss'

const mainCssClass = 'auth'

type TFormType = 'auth' | 'sign'

export const Auth: FC<TClassName> = memo<TClassName>(({
	className
}) => {
	const [formType, setFormType] = useState<TFormType>('auth')

	const handleTabChange: TOnClick = useCallback((event, metaData) => {
		setFormType(metaData as TFormType)
	}, [])

	const handleKey = useCallback(() => {

	}, [])

	const handleClick = useCallback(() => {

	}, [])

	const baseTabCssClass = `${mainCssClass}__tab`
	const passiveTabCssClass = `${baseTabCssClass}_passive`

	return (
		<div className={cssClasses(className, mainCssClass)}>
			<div className={`${mainCssClass}__forms`}>
				<div className={`${mainCssClass}__header`}>
					<Button
						className={cssClasses(baseTabCssClass, {[passiveTabCssClass]: formType !== 'auth'})}
						type="transparent"
						text="Вход"
						metaData="auth"
						onClick={handleTabChange}
					/>
					<Button
						className={cssClasses(baseTabCssClass, {[passiveTabCssClass]: formType !== 'sign'})}
						type="transparent"
						text="Регистрация"
						metaData="sign"
						onClick={handleTabChange}
					/>
				</div>
				<div className={`${mainCssClass}__content`}>
					{formType === 'auth' && (
						<AuthForm
							className={`${mainCssClass}__form`}
						/>
					)}
					{formType === 'sign' && (
						<SignForm
							className={`${mainCssClass}__form`}
						/>
					)}
				</div>
			</div>
		</div>
	)
})
Auth.displayName = 'Auth'
