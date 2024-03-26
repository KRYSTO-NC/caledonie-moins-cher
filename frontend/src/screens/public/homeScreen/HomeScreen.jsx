
import HomeHero from '../../../components/screens/home/homeHero/HomeHero'


import Products from '../../../components/screens/home/products/Products'


const HomeScreen = () => {
  return (
    <>

      <HomeHero />
     
      
      <div className="flex-item">

      <Products/>
      </div>
      
      {/* <HomeContacts /> */}
    </>
  )
}

export default HomeScreen
