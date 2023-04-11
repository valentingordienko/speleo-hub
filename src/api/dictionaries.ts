import {resolve} from '../core/utils/fakeApi'
import {TOption} from '../core/types'
import {TDictionaryName} from './types/dictionaries'
import {dictionaryMap} from './data/dictionaries'

export type TDictionary<T = string> = TOption<T>[]

export type TGetDictionaryResponseBody = TDictionary | null
export async function getDictionary(name: TDictionaryName): Promise<TGetDictionaryResponseBody> {
  const responseBody = dictionaryMap[name]
  return resolve(responseBody, 500)
}
