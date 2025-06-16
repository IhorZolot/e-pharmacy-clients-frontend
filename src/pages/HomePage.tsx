import { MainBanner, NearestStore, PromoSection, ReviewsSection, SaleSector } from '@/components'

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <SaleSector />
      <NearestStore />
      <PromoSection/>
      <ReviewsSection/>
    </div>
  )
}

export default HomePage