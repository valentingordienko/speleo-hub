import {isUrl, getUrlParams} from '../../core/utils/url'

export type TAppUrls =
  '/' |
  '/auth' |
  '/profile' |
  '/events' |
  '/events/:id' |
  '/articles' |
  '/articles/:id' |
  '/caves' |
  '/caves/:id' |
  '/persons' |
  '/persons/:id' |
  '/groups' |
  '/groups/:id' |
  '/photos' |
  '/photos/:id'

export type TCaveUrlParams = {
  id: string
}

export type TPersonUrlParams = {
  id: string
}

export const isAppUrl = isUrl<TAppUrls>
export const getAppUrlParams = getUrlParams<TAppUrls>
