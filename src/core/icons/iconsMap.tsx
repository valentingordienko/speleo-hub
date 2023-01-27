import {FC} from 'react'
import {
  AddPersonOutline,
  BookOutline,
  CalendarOutline,
  FileJpgOutline,
  GPSOutline,
  GroupOfPersonsOutline,
  PersonOutline,
  PlusOutline,
  TBaseProps
} from '../icons'

export const IconsMap: Record<string, FC<TBaseProps>> = {
  'AddPersonOutline': AddPersonOutline,
  'BookOutline': BookOutline,
  'CalendarOutline': CalendarOutline,
  'FileJpgOutline': FileJpgOutline,
  'GPSOutline': GPSOutline,
  'GroupOfPersonsOutline': GroupOfPersonsOutline,
  'PersonOutline': PersonOutline,
  'PlusOutline': PlusOutline,
}

export type TIconsNames = keyof typeof IconsMap