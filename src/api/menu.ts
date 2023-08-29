import {resolve} from '../core/utils/fakeApi'
import cookies from '../app/utils/cookies'
import {
  menuData,
  guestMenuOptions,
  userMenuOptions,
  TMenuOptions,
  TAvailableMenuOptionsList
} from './data/menu'

export type TGetMenuResponseBody = typeof menuData

function getMenuOptions(menuOptions: TMenuOptions, availableOptions: TAvailableMenuOptionsList): TMenuOptions {
  return menuOptions.filter(({key}) => availableOptions.includes(key)).sort((a, b) => a.priority - b.priority)
}

export async function getMenu(): Promise<TGetMenuResponseBody> {
  let responseBody: TGetMenuResponseBody = []
  if (cookies.get('jwt')) {
    responseBody = getMenuOptions(menuData, userMenuOptions)
  } else {
    responseBody = getMenuOptions(menuData, guestMenuOptions)
  }
  return resolve(responseBody, 200)
}
