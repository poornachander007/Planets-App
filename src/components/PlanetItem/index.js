// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div className="PlanetItem_container">
      <img className="planet_image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name_heading">{name}</h1>
      <p className="planet_description">{description}</p>
    </div>
  )
}

export default PlanetItem
