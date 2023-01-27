import {TUuid} from '../core/types'
import {TCave, cavesData} from './data/caves'
import {TCountryCode} from './types/dictionaries'

type TCaveId = TUuid

export type TGetCavesIdsResponseBody = TCaveId[]

export async function getCavesIds(): Promise<TGetCavesIdsResponseBody> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cavesData.map(({uuid}) => ({uuid})))
    }, Math.floor(Math.random() * 10000))
  })
}

type TCavePreview = {
  alias?: string
  name: string
  country?: TCountryCode
  description: string
  deep?: number
  length?: number
} & TUuid

export type TGetCaveShortDataResponseBody = TCavePreview | null
export async function getCavePreviewData(uuid: string): Promise<TGetCaveShortDataResponseBody> {
  return new Promise((resolve) => {
    const cave: TCave | null = cavesData.find((item) => item.uuid === uuid) || null
    let preview: TCavePreview | null = null
    if (cave) {
      preview = {
        uuid,
        alias: cave.alias,
        name: cave.name,
        country: cave.country,
        description: cave.description ?? 'Описание отсутствует',
        deep: cave.amplitude,
        length: cave.length
      }
    }
    setTimeout(() => {
      resolve(preview)
    }, Math.floor(Math.random() * 10000))
  })
}

export type TGetCaveDataResponseBody = TCave | null
export async function getCaveData(id: string): Promise<TGetCaveDataResponseBody> {
  return new Promise((resolve) => {
    const cave: TCave | null = cavesData.find((item) => item.alias === id || item.uuid === id) || null
    setTimeout(()=> {
      resolve(cave)
    }, Math.floor(Math.random() * 10000))
  })
}
