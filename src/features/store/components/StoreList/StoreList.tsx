import { StoreCard } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { selectStore } from '../../storeSelectors'
import { useEffect } from 'react'
import { fetchStoreAll } from '../../operations'

import styles from './StoreList.module.scss'


const StoreList = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(selectStore)

  useEffect(() => {
    dispatch(fetchStoreAll())
  }, [dispatch])
  return (
    <section className={styles.store}>
      <h1>Medicine store</h1>
      {store.map(store => (
        <StoreCard key={store._id} store={store} />
      ))}
    </section>
  )
}

export default StoreList