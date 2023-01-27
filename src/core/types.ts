export type TSexCode = 'male' | 'female'
export type TSizeCode = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type TClassName = {
  className?: string
}
export type TDisabled = {
  disabled?: boolean
}
export type TReadonly = {
  readonly?: boolean
}
export type TProcessing = {
  processing?: boolean
}
export type TSize = {
  size?: TSizeCode
}
export type TOption<T = string> = {
  key: T
  value: string
  disabled: boolean
  hidden: boolean
}
export type TMetaData = {
  metaData?: string | Record<string, any> | null
}
export type TUuid = {
  uuid: string
}
export type TAlias = {
  alias?: string
}