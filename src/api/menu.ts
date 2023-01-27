import {menuData} from './data/menu'

export type TGetMenuResponseBody = typeof menuData
export async function getMenu(): Promise<TGetMenuResponseBody> {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve(menuData.filter(({hidden})=> !hidden).sort((a, b) => a.priority - b.priority))
    }, 2000)
  })
}
