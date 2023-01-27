import {TAlias, TSexCode, TUuid} from '../core/types'
import { usersData } from './data/users'
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
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(usersData.map((({uuid})=> ({uuid}))))
    }, Math.floor(Math.random() * 10000))
  })
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
  return new Promise((resolve)=> {
    const user: TUser | null = usersData.find((item) => item.uuid === uuid) || null
    let preview: TUserPreview | null = null
    if (user) {
      preview = {
        uuid,
        firstName: user.firstName,
        lastName: user.lastName,
        middleName: user.middleName,
        photo: user.photo,
        country: user.country,
        city: user.city
      }
    }
    setTimeout(() => {
      resolve(preview)
    }, Math.floor(Math.random() * 10000))
  })
}

export type TGetUserDataResponseBody = TUser | null
export async function getUserData(id: string): Promise<TGetUserDataResponseBody> {
  return new Promise((resolve) => {
    const cave: TUser | null = usersData.find((item) => item.alias === id || item.uuid === id) || null
    setTimeout(()=> {
      resolve(cave)
    }, Math.floor(Math.random() * 10000))
  })
}