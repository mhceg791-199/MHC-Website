import img from '../../../assets/world_mask.png'
import ModelView from '../../shared/ModelView/ModelView'
import StripeGlobe from './StripeGlobe'
// import StripeGlobe from '../StripeGlobe'

export default function GlobeScene() {
  return (
    <ModelView>
      <StripeGlobe maskMap={img} />
    </ModelView>
  )
}
