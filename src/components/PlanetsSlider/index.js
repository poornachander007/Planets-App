// Write your code here
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: 'slick-dots',
  }

  return (
    <div data-testid="planets" className="PlanetsSlider_container">
      <h1 className="main_heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(item => (
          <PlanetItem key={item.id} details={item} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
