import PlanetsSlider from './components/PlanetsSlider'

import './App.css'

const planetsList = [
  {
    id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
    name: 'Mercury',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/mercury-img.png',
    description:
      'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun planets.',
  },
  {
    id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
    name: 'Venus',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/venus-img.png',
    description:
      'Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'Earth',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/earth-img.png',
    description:
      'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth’s surface is land consisting of continents and islands.',
  },
  {
    id: 'c2277c2c-f72e-11eb-9a03-0242ac130003',
    name: 'Mars',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/mars-img.png',
    description:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.',
  },
  {
    id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
    name: 'Jupiter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/jupiter-img.png',
    description:
      'Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
  },
  {
    id: 'c2277d9e-f72e-11eb-9a03-0242ac130003',
    name: 'Saturn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/saturn-img.png',
    description:
      'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn’s.',
  },
  {
    id: 'c2277e52-f72e-11eb-9a03-0242ac130003',
    name: 'Uranus',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/uranus-img.png',
    description:
      'Uranus is the seventh planet from the Sun and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
  },
  {
    id: 'c2277f06-f72e-11eb-9a03-0242ac130003',
    name: 'Neptune',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/neptune-img.png',
    description:
      'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
  },
]

const App = () => <PlanetsSlider planetsList={planetsList} />

export default App

//---------------------------------------------------------------------------------

// import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import './App.css'

// const App = () => {
//   const settings = {
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     dotsClass: 'slick-dots',
//   }
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           {/* <h3>1</h3> */}
//           <img
//             alt="mancha"
//             height={100}
//             width={100}
//             src="https://media.licdn.com/dms/image/D5635AQFqsTZOL3qI0g/profile-framedphoto-shrink_800_800/0/1681276638782?e=1682402400&v=beta&t=qRdyBlBFtUbJHYnfKFJd06r889TO9wueJy3eZ0fPsoQ"
//           />
//         </div>
//         <div>
//           <img
//             alt="mancha"
//             height={100}
//             width={100}
//             src="https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/119412215_2618123058442106_4584433617191289137_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ycV2G1P7fV4AX92JeDM&_nc_ht=scontent.fhyd14-1.fna&oh=00_AfB118SW0qzYS6PzbeV2w1FfxBXEJt5WNqaSZiE49xEsaQ&oe=64659B95"
//           />
//         </div>
//         <div>
//           <img
//             alt="mancha"
//             height={100}
//             width={100}
//             src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/215304314_2834994026755007_1076533329490965247_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vhGWzYDB_PcAX8m_dQc&_nc_ht=scontent.fhyd14-2.fna&oh=00_AfAKrzjlBySo7-4yNpPmX_JP-vtSoS0EFAjWdGcxL4Hh1g&oe=64427742"
//           />
//         </div>
//         <div>
//           <img
//             alt="mancha"
//             height={100}
//             width={100}
//             src="https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/38536403_2073410686246682_419634441011331072_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=3hBqexDUAZwAX_02pUJ&_nc_ht=scontent.fhyd14-1.fna&oh=00_AfAuIZtiv3aT5av64-ha57a6LE7MZrs5cm2iSNDhGY0N3g&oe=64658CA3"
//           />
//         </div>
//         <div>
//           <img
//             alt="mancha"
//             height={100}
//             width={100}
//             src="https://pps.whatsapp.net/v/t61.24694-24/341539802_128068300248362_9011517511219631076_n.jpg?ccb=11-4&oh=01_AdQUSTp2pMivKdQiAZO3kgYRuvpW4RkaKD84vbUXIl254Q&oe=644B2C87"
//           />
//         </div>
//       </Slider>
//     </div>
//   )
// }

// export default App
