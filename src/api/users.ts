import {resolve} from '../core/utils/fakeApi'
import {TAlias, TSexCode, TUuid} from '../core/types'
import {usersData} from './data/users'
import {TCountryCode} from './types/dictionaries'

export type TUser = {
  firstName: string
  lastName: string
  middleName?: string
  nickname?: string
  birthday?: string
  country: TCountryCode
  city: string
  photo?: string
  sex: TSexCode
} & TUuid & TAlias

type TUserId = TUuid

export type TGetUsersIdsResponseBody = TUserId[]

export async function getUsersIds(): Promise<TGetUsersIdsResponseBody> {
  return resolve<TGetUsersIdsResponseBody>(usersData.map((({uuid}) => ({uuid}))))
}

type TUserPreview = {
  firstName: string
  lastName: string
  middleName?: string
  photo?: string
  country: TCountryCode
  city: string
} & TUuid & TAlias

export type TGetUserPreviewResponseBody = TUserPreview | null

export async function getUserPreviewData(uuid: string): Promise<TGetUserPreviewResponseBody> {
  const user: TUser | null = usersData.find((item) => item.uuid === uuid) || null
  let responseBody: TUserPreview | null = null
  if (user) {
    responseBody = {
      uuid,
      firstName: user.firstName,
      lastName: user.lastName,
      middleName: user.middleName,
      photo: user.photo,
      country: user.country,
      city: user.city
    }
  }
  return resolve<TGetUserPreviewResponseBody>(responseBody)
}

export type TGetUserDataResponseBody = TUser | null

export async function getUserData(id: string): Promise<TGetUserDataResponseBody> {
  const responseBody: TUser | null = usersData.find((item) => item.alias === id || item.uuid === id) || null
  return resolve<TGetUserDataResponseBody>(responseBody)
}

export type TGetCurrentUserIdResponseBody = boolean

export async function getIsUserAuthentication(): Promise<TGetCurrentUserIdResponseBody> {
  return true
}