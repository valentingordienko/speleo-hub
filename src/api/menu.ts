import {resolve} from '../core/utils/fakeApi'
import {menuData} from './data/menu'

export type TGetMenuResponseBody = typeof menuData

export async function getMenu(): Promise<TGetMenuResponseBody> {
  const responseBody: TGetMenuResponseBody = menuData.filter(({hidden}) => !hidden).sort((a, b) => a.priority - b.priority)
  return resolve(responseBody, 2000)
}
