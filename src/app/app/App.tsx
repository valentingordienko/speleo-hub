import React, {FC, memo, ReactElement, useCallback, useMemo, useState, ReactNode, useEffect} from 'react'
import {useUrlListener} from '../../core/hooks/urlHooks'
import {cssClasses} from '../../core/utils/cssClasses'
import cookies from '../utils/cookies'
import {isAppUrl} from '../utils/url'
import {GlobalContext} from '../contexts/global'
import {BaseLayout} from '../layouts/BaseLayout'
import {Private} from '../components/private'
import {MainPage} from '../pages/MainPage'
import {Persons} from '../features/persons'
import {Person} from '../features/person'
import {ProfilePage} from '../pages/ProfilePage'
import {EventsPage} from '../pages/EventsPage'
import {ArticlesPage} from '../pages/ArticlesPage'
import {Caves} from '../features/caves'
import {Cave} from '../features/cave'
import {Auth} from '../features/auth'
import {GroupsPage} from '../pages/GroupsPage'
import {PhotosPage} from '../pages/PhotosPage'

import '../../core/css/reset.scss'
import './App.scss'

export const App: FC = memo(() => {
  const [path, setPath] = useState<string>(window.location.pathname)
  const isAuthUser = !!cookies.get('jwt')

  const handlePathChange = useCallback<Parameters<typeof useUrlListener>[0]>((event, path) => {
    setPath(path)
  }, [])

  useUrlListener(handlePathChange)

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <GlobalContext>
      <div className="app">
        <BaseLayout>
          {isAppUrl('/', path) && (
            <p>Главная</p>
          )}
          {isAppUrl('/auth', path) && (
            <Auth/>
          )}
          {isAppUrl('/profile', path) && (
            <p>Моя страница</p>
          )}
          {isAppUrl('/events', path) && (
            <Private><p>События</p></Private>
          )}
          {isAppUrl('/events/:id', path) && (
            <p>Событие</p>
          )}
          {isAppUrl('/articles', path) && (
            <p>Статьи</p>
          )}
          {isAppUrl('/articles/:id', path) && (
            <p>Статья</p>
          )}
          {isAppUrl('/caves', path) && (
            <Caves/>
          )}
          {isAppUrl('/caves/:id', path) && (
            <Cave/>
          )}
          {isAppUrl('/persons', path) && (
            <Persons/>
          )}
          {isAppUrl('/persons/:id', path) && (
            <Person/>
          )}
          {isAppUrl('/groups', path) && (
            <p>Сообщества</p>
          )}
          {isAppUrl('/groups/:id', path) && (
            <p>Сообщество</p>
          )}
          {isAppUrl('/photos', path) && (
            <p>Фотографии</p>
          )}
          {isAppUrl('/photos/:id', path) && (
            <p>Фотография</p>
          )}
        </BaseLayout>
      </div>
    </GlobalContext>
  )
})
App.displayName = 'App'
