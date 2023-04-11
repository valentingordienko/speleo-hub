import {resolve} from '../core/utils/fakeApi'
import {TUuid} from '../core/types'
import {TCave, cavesData} from './data/caves'
import {TCountryCode} from './types/dictionaries'

type TCaveId = TUuid

export type TGetCavesIdsResponseBody = TCaveId[]

export async function getCavesIds(): Promise<TGetCavesIdsResponseBody> {
  const responseBody = cavesData.map(({uuid}) => ({uuid}))
  return resolve(responseBody)
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
  const cave: TCave | null = cavesData.find((item) => item.uuid === uuid) || null
  let responseBody: TCavePreview | null = null
  if (cave) {
    responseBody = {
      uuid,
      alias: cave.alias,
      name: cave.name,
      country: cave.country,
      description: cave.description ?? 'Описание отсутствует',
      deep: cave.amplitude,
      length: cave.length
    }
  }
  return resolve(responseBody)
}

export type TGetCaveDataResponseBody = TCave | null

export async function getCaveData(id: string): Promise<TGetCaveDataResponseBody> {
  const responseBody: TCave | null = cavesData.find((item) => item.alias === id || item.uuid === id) || null
  return resolve(responseBody)
}
