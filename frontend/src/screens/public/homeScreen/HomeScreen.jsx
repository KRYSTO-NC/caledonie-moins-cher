import HomeArticles from '../../../components/screens/home/homeArticles/HomeArticles'
import HomeHero from '../../../components/screens/home/homeHero/HomeHero'
import HomeContacts from '../../../components/screens/home/homeContact/HomeContacts'
import HomeAbout from '../../../components/screens/home/homeAbout/HomeAbout'
import IconsSection from '../../../components/screens/home/iconsSection/IconsSection'

const HomeScreen = () => {
  return (
    <>

    <h1>MODIF GIT HUB</h1>
    <p>push</p>
      <HomeHero />
      <IconsSection/>
      <HomeAbout/>
      {/* <HomeArticles /> */}
      {/* <HomeContacts /> */}
    </>
  )
}

export default HomeScreen
