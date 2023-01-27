import React, {FC, memo, useCallback, useState, useEffect} from 'react'
import {getDictionary, TGetDictionaryResponseBody} from '../../../../api/dictionaries'
import {TClassName} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../../core/uic/ProcessIndicator'
import {Avatar} from '../../../../core/uic/Avatar'
import {Button} from '../../../../core/uic/Button'
import {IconsMap} from '../../../../core/icons'
import {getUserPhoto} from '../../../utils/src'
import {getAppUrlParams, TPersonUrlParams} from '../../../utils/url'
import {getUserData, TGetUserDataResponseBody} from '../../../../api/users'

import './person.scss'

type TProps = {} & TClassName

const mainCssClass = 'person'

export const Person: FC<TProps> = ({
  className
}) => {
  const {id} = getAppUrlParams('/persons/:id') as TPersonUrlParams
  const [processing, setProcessing] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [countries, setCountries] = useState<TGetDictionaryResponseBody | null>(null)
  const [data, setData] = useState<TGetUserDataResponseBody>(null)

  const getDictionaries = useCallback(async () => {
    try {
      const countriesDictionary: TGetDictionaryResponseBody = await getDictionary('countries')
      if (countriesDictionary) {
        setCountries(countriesDictionary)
      }
    } catch (error) {
      setError('Ошибка')
    }
  }, [])

  const getData = useCallback(async () => {
    try {
      const caveData: TGetUserDataResponseBody = await getUserData(id)
      if (caveData) {
        setData(caveData)
      }
    } catch (error) {
      setError('Ошибка')
    }
  }, [id])

  const initData = useCallback(async () => {
    try {
      setProcessing(true)
      await getDictionaries()
      await getData()
    } finally {
      setProcessing(false)
    }
  }, [getData])

  useEffect(() => {
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
      {!processing && !error && !data && (
        <div>Данные отсутствуют</div>
      )}
      {!processing && !error && data && (
        <div className={`${mainCssClass}__data`}>
          <div className={`${mainCssClass}__header`}>
            <Avatar
              className={`${mainCssClass}__avatar`}
              src={data?.photo ? getUserPhoto(data.uuid, data?.photo) : ''}
              size="xxl"
            />
            <div className={`${mainCssClass}__info`}>
              <div className={`${mainCssClass}__info-item`}>
                <h2>{`${data?.firstName} ${data?.lastName}`}</h2>
              </div>
              <div className={`${mainCssClass}__info-item`}>
                {`${countries?.find(({key}) => key === data?.country)?.value ?? data?.country}`}
              </div>
              <div className={`${mainCssClass}__info-item`}>
                {data?.city}
              </div>
            </div>
          </div>
          <div className={`${mainCssClass}__tools`}>
            <Button
              className={`${mainCssClass}__add-contact-button`}
              text="В контакты"
              type="simple"
              leftIcon={IconsMap.PlusOutline}
            />
          </div>
        </div>
      )}
    </div>
  )
}
Person.displayName = 'Person'
