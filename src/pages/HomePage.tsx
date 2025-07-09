import { MainBanner,  PromoSection,  SaleSector } from '@/components'
import {ReviewsSection, NearestStoreList} from '@/features'

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