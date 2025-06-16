import { SpriteSVG } from '@/assets/SpriteSVG'
import featuresData from '@/data/features-data'
import { images } from '@assets/images'

const PromoSection = () => {
  return (
    <section>
      <div> <h1>Add the medicines you need online now</h1>
      <p>Enjoy the convenience of having your prescriptions filled from home by connecting with your community pharmacy through our online platform.</p>
      <button>Buy medicine</button>
      <img src={images.promo} alt='promo'/>
      </div>
      <div>
        {featuresData.map(({ id, title }) => (
          <ul key={id}>
            <li>
              <SpriteSVG name='lightning'/>
              {title}</li>
          </ul>
        ))}
      </div>
     
    </section>
  )
}

export default PromoSection