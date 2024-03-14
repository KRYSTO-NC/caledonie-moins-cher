import HomeArticles from '../../../components/screens/home/homeArticles/HomeArticles'
import HomeHero from '../../../components/screens/home/homeHero/HomeHero'
import HomeContacts from '../../../components/screens/home/homeContact/HomeContacts'
import HomeAbout from '../../../components/screens/home/homeAbout/HomeAbout'
import IconsSection from '../../../components/screens/home/iconsSection/IconsSection'

const HomeScreen = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
        commodi? Ab, animi beatae blanditiis facilis minus tempore culpa vero
        esse omnis perspiciatis harum qui. Aliquid id culpa commodi sunt
        praesentium!
      </p>
      <HomeHero />
      <IconsSection />
      <HomeAbout />
      {/* <HomeArticles /> */}
      {/* <HomeContacts /> */}
    </>
  )
}

export default HomeScreen
