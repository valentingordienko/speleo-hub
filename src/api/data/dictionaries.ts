import { TDictionaryName, TCountryCode } from '../types/dictionaries'
import { TDictionary } from '../dictionaries'

export const countryDictionary: TDictionary<TCountryCode> = [
  {
    key: 'RUS',
    value: 'Россия',
    hidden: false,
    disabled: false
  },
  {
    key: 'BEL',
    value: 'Белоруссия',
    hidden: false,
    disabled: false
  }
]

export const dictionaryMap: Record<TDictionaryName, TDictionary> = {
  countries: countryDictionary
}
