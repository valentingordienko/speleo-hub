import {TIconsNames} from '../../core/icons'
import {TOption} from '../../core/types'

export type TMenuOption = {
  icon: TIconsNames
  link?: string
  priority: number
} & TOption

export const menuData: TMenuOption[] = [
  {
    key: 'profile',
    value: 'Моя страница',
    icon: 'PersonOutline',
    hidden: false,
    disabled: true,
    priority: 0
  },
  {
    key: 'events',
    value: 'События',
    icon: 'CalendarOutline',
    hidden: true,
    disabled: false,
    priority: 10
  },
  {
    key: 'articles',
    value: 'Статьи',
    icon: 'BookOutline',
    hidden: true,
    disabled: false,
    priority: 20
  },
  {
    key: 'caves',
    value: 'Пещеры',
    icon: 'GPSOutline',
    hidden: false,
    disabled: false,
    priority: 40
  },
  {
    key: 'persons',
    value: 'Люди',
    icon: 'AddPersonOutline',
    hidden: false,
    disabled: false,
    priority: 30
  },
  {
    key: 'groups',
    value: 'Сообщества',
    icon: 'GroupOfPersonsOutline',
    hidden: true,
    disabled: false,
    priority: 50
  },
  {
    key: 'photos',
    value: 'Фотографии',
    icon: 'FileJpgOutline',
    hidden: true,
    disabled: false,
    priority: 60
  },
  {
    key: 'messages',
    value: 'Сообщения',
    icon: 'FileJpgOutline',
    hidden: false,
    disabled: false,
    priority: 10
  },
  {
    key: 'contacts',
    value: 'Контакты',
    icon: 'FileJpgOutline',
    hidden: false,
    disabled: false,
    priority: 20
  }

]
