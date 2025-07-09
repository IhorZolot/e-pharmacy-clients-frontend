import { StoreCard } from '@/components'
import styles from './NearestStoreList.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { selectStoreNearest, selectStoreNearestError, selectStoreNearestLoading } from '../../storeNearestSelectors'
import { useEffect } from 'react'
import { fetchStoreNearest } from '../../operations'

const NearestStoreList = () => {
  const dispatch = useAppDispatch()
  const storeNearest = useAppSelector(selectStoreNearest)
  const isLoading = useAppSelector(selectStoreNearestLoading)
  const error = useAppSelector(selectStoreNearestError)

  useEffect(() => {
    dispatch(fetchStoreNearest())
  }, [dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    console.log(error)
  }

  return (
    <section className={styles.nearestStore} >
      <h1>Your Nearest Medicine Store</h1>
      <p>Search for Medicine, Filter by your location</p>
      {storeNearest.map(store => (
        <StoreCard key={store._id} store={store} />
      ))}
    </section>
  )
}

export default NearestStoreList