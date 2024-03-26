
import HomeHero from '../../../components/screens/home/homeHero/HomeHero'


import Products from '../../../components/screens/home/products/Products'


const HomeScreen = () => {
  return (
    <>
   <h2>TEST</h2>
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
