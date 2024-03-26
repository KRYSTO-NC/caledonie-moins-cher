
import HomeHero from '../../../components/screens/home/homeHero/HomeHero'

import HomeAbout from '../../../components/screens/home/homeAbout/HomeAbout'
import HomeCategories from '../../../components/screens/home/homeCategories/HomeCategories'
import Products from '../../../components/screens/home/products/Products'


const HomeScreen = () => {
  return (
    <>

      <HomeHero />
      {/* <HomeCategories/> */}
      
      <div className="flex-item">

      <Products/>
      </div>
      
      {/* <HomeContacts /> */}
    </>
  )
}

export default HomeScreen
