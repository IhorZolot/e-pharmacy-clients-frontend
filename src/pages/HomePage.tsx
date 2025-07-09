import { MainBanner,  PromoSection, ReviewsSection, SaleSector } from '@/components'
import NearestStoreList from '@/features/store/components/NearestStoreList/NearestStoreList'

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <SaleSector />
      <NearestStoreList />
      <PromoSection/>
      <ReviewsSection/>
    </div>
  )
}

export default HomePage