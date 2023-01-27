import React, {FC, memo, useCallback, useState, useEffect} from 'react'
import {TClassName} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../../core/uic/ProcessIndicator'
import { PersonCard } from './personCard'
import {
  getUsersIds,
  TGetUsersIdsResponseBody,
} from '../../../../api/users'
import {
  getDictionary,
  TGetDictionaryResponseBody,
} from '../../../../api/dictionaries'

import './persons.scss'

type TProps = TClassName

const mainCssClass = 'persons'

export const Persons: FC<TProps> = memo<TProps>(({
  className
}) => {
  const [processing, setProcessing] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [countries, setCountries] = useState<TGetDictionaryResponseBody | null>(null)
  const [data, setData] = useState<TGetUsersIdsResponseBody | null>(null)

  const getDictionaries = useCallback(async ()=> {
    try {
      const countriesDictionary: TGetDictionaryResponseBody = await getDictionary('countries')
      if(countriesDictionary) {
        setCountries(countriesDictionary)
      }
    } catch (error) {
      setError('Ошибка')
    }
  }, [])

  const getData = useCallback(async ()=> {
    try {
      const response: TGetUsersIdsResponseBody = await getUsersIds()
      if(response) {
        setData(response)
      }
    } catch (error) {
      setError('Ошибка')
    }
  }, [])

  const initData = useCallback(async ()=> {
    try {
      setProcessing(true)
      await getDictionaries()
      await getData()
    } finally {
      setProcessing(false)
    }
  }, [])

  useEffect(()=> {
    initData()
  }, [initData])

  return (
    <div className={cssClasses(className, mainCssClass)}>
      {processing && (
        <ProcessIndicator className={`${mainCssClass}__indicator`}/>
      )}
      {!processing && error && (
        <div>Ошибочка вышла</div>
      )}
      {!processing && !error && !data?.length && (
        <div>Список пуст</div>
      )}
      {!processing && !error && data?.length && (
        <div className={`${mainCssClass}__cards`}>
          {data?.map(({uuid})=> (
            <PersonCard
              key={uuid}
              className={`${mainCssClass}__card`}
              uuid={`${uuid}`}
              countries={countries || []}
            />
          ))}
        </div>
      )}
    </div>
  )
})
Persons.displayName = 'Caves'
