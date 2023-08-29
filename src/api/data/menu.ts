import {TIconsNames} from '../../core/icons'

export type TMenuOptionKey =
  'profile' |
  'events' |
  'articles' |
  'caves' |
  'persons' |
  'groups' |
  'photos' |
  'messages' |
  'contacts'

export type TMenuOption = {
  key: TMenuOptionKey
  value: string
  icon: TIconsNames
  link?: string
  priority: number
}
export type TMenuOptions = TMenuOption[]

export const menuData: TMenuOptions = [
  {
    key: 'profile',
    value: 'Моя страница',
    icon: 'PersonOutline',
    priority: 0
  },
  {
    key: 'events',
    value: 'События',
    icon: 'CalendarOutline',
    priority: 10
  },
  {
    key: 'articles',
    value: 'Статьи',
    icon: 'BookOutline',
    priority: 20
  },
  {
    key: 'caves',
    value: 'Пещеры',
    icon: 'GPSOutline',
    priority: 40
  },
  {
    key: 'persons',
    value: 'Люди',
    icon: 'AddPersonOutline',
    priority: 30
  },
  {
    key: 'groups',
    value: 'Сообщества',
    icon: 'GroupOfPersonsOutline',
    priority: 50
  },
  {
    key: 'photos',
    value: 'Фотографии',
    icon: 'FileJpgOutline',
    priority: 60
  },
  {
    key: 'messages',
    value: 'Сообщения',
    icon: 'FileJpgOutline',
    priority: 10
  },
  {
    key: 'contacts',
    value: 'Контакты',
    icon: 'FileJpgOutline',
    priority: 20
  }
]

export type TAvailableMenuOptionsList = TMenuOptionKey[]

export const guestMenuOptions: TAvailableMenuOptionsList = [
  'caves'
]

export const userMenuOptions: TAvailableMenuOptionsList = [
  'profile',
  'persons',
  'contacts'
]
