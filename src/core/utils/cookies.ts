export type TCookies<K extends string> = Partial<Record<K, string>>

export function getAll<K extends string>(): TCookies<K> {
  const cookies: TCookies<K> = {}

  document.cookie?.split('; ')?.forEach((item)=> {
    const [key, value] = item.split('=')
    cookies[key as K] = value
  })

  return cookies
}

export function get<K extends string>(key: K): string | null {
  return getAll()[key] || null
}

export function set<K extends string, V extends string>(key: K, value: V) {
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
}

export function generate<K extends string>() {
  return {
    getAll() {
      return getAll<K>()
    },
    get(key: K) {
      return get<K>(key)
    },
    set(key: K, value: string) {
      return set<K, string>(key, value)
    }
  }
}

export default {
  getAll,
  get,
  set
}