import React, {FC, memo, useCallback, useState, useEffect} from 'react'
import {TClassName} from '../../../../core/types'
import {cssClasses} from '../../../../core/utils/cssClasses'
import {ProcessIndicator} from '../../../../core/uic/ProcessIndicator'
import {getAppUrlParams, TCaveUrlParams} from '../../../utils/url'
import {getCaveData, TGetCaveDataResponseBody} from '../../../../api/caves'

import './cave.scss'

type TProps = TClassName

const mainCssClass = 'cave'

export const Cave: FC<TProps> = ({
  className
}) => {
  const { id } = getAppUrlParams('/caves/:id') as TCaveUrlParams
  const [processing, setProcessing] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<TGetCaveDataResponseBody>(null)

  const handleGetData = useCallback(async ()=> {
    try {
      const caveData: TGetCaveDataResponseBody = await getCaveData(id)
      if(caveData) {
        setData(caveData)
      }
    } catch (error) {
      setError('Ошибка')
    }
  }, [id])

  const handleInitData = useCallback(async ()=> {
    try {
      setProcessing(true)
      await handleGetData()
    } finally {
      setProcessing(false)
    }
  }, [handleGetData])

  useEffect(()=> {
    handleInitData()
  }, [handleInitData])

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
          <h2>{`Пещера "${data?.name}"`}</h2>
        </div>
      )}
    </div>
  )
}
Cave.displayName = 'Cave'
