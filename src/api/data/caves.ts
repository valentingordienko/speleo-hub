import {TUuid, TAlias} from '../../core/types'
import {TCountryCode} from '../types/dictionaries'

export type TCave = {
  name: string
  country?: TCountryCode
  region?: string
  description?: string
  location?: {
    x: string
    y: string
  } | null
  amplitude?: number
  length?: number
  maps?: string[]
  topo?: string[]
  photos?: string[]
} & TUuid & TAlias

export const cavesData: TCave[] = [
  {
    uuid: '1',
    alias: 'redCaveCrimea',
    name: 'Красная',
    length: 15,
    amplitude: 150,
    country: 'RUS',
    region: 'Крым',
    description: `Пещера Красная известна с начала XIX в. под названием Кизил-Коба. В 1831 г. ее 400 м описаны Дюбуа де Монпере, а в 1910 г. - засняты П. Петровым. В 1959-1969 гг. исследована Комплексной карстовой экспедицией АН УССР (рук. В.Н. Дублянский) и спелсосекциями страны (рук.В.В. Илюхин, Ю.Л. Симонов, Б.С. Коган и др.). Вход в пещ. Голубиная был найден в 1985г. симферопольскими спелеологами при раскопках щели в борту воронки рядом с пещ. Снежная. К 1991г. пещера была ими пройдена до грота (как потом оказалось, всего в 20м по прямой от Красной), позже получившего название "9 1/2". В 1996 г. исследования продолжили москвичи, приблизившиеся к Красной на расстояние 4 метра. Соединение с Красной было найдено в феврале 1997г. (Е. Снетков и К. Цуриков, рук. Н. Киряков). Подробное изложение истории исследования с открытия до мая 1997г. можно найти в [3]. В мае 1997г. левый исток Голубиной пройден вверх по ручью на 240м, а в ноябре в его конце разобран проход в большой зал с водопадом (рук. А. Шелепин). После восхождения на водопад (май 2000г.) в результате ряда экспедиций [4] он был пройден почти на 1,5 км по длине и 100м вверх (рук. Г. Самохин).`
  },
  {
    uuid: '2',
    alias: 'snakeCaveCrimea',
    name: 'Змеиная',
    country: 'RUS',
    region: 'Крым'
  },
  {
    uuid: '3',
    alias: 'mammutChocrakCrimea',
    name: 'Маммут-Чокрак',
    country: 'RUS',
    region: 'Крым'
  },
  {
    uuid: '4',
    alias: 'baydarChokrakCrimea',
    name: 'Байдар-Чокрак',
    country: 'RUS',
    region: 'Крым'
  },
  {
    uuid: '5',
    alias: 'emineBairHosarCrimea',
    name: 'Эмине-Баир-Хосар',
    country: 'RUS',
    region: 'Крым'
  }
]
