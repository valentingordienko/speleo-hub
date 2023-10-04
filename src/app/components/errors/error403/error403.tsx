import React, { FC , memo, useMemo } from 'react'
import {TClassName} from "../../../../core/types";
import { cssClasses } from '../../../../core/utils/cssClasses'
import { Button } from "../../../../core/uic/Button";
import {Link} from "../../../../core/uic/Link";
import { Error } from '../error'

import './error403.scss'

export type TProps = TClassName

const mainCssClass = 'error-403'

export const Error403: FC<TProps> = memo<TProps>(({
    className,
}) => {
    const description: string[] = useMemo(() => [
        'У вас нет прав на просмотр данной страницы',
        'Обратитесь к администратору'
    ], [])

    return (
        <Error
            className={cssClasses(className, mainCssClass)}
            code={403}
            description={description}
        >
            <Link
                text="Вернуться на главную страницу"
                href='/'
            />
        </Error>
    )
})

