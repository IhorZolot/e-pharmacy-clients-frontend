import { MainBanner, NearestStore, PromoSection, Reviews, SaleSector } from '@/features/medicine/components'

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <SaleSector />
      <NearestStore />
      <PromoSection/>
      <Reviews/>
    </div>
  )
}

export default HomePage