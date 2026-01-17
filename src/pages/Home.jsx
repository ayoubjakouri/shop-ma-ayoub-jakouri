import HeroSection from './../components/home/HeroSection'
import CategorySection from './../components/home/CategorySection'
import FlashSaleSection from './../components/home/FlashSaleSection'
import TodayForYouSection from './../components/home/TodayForYouSection'
import BestSellingStoreSection from './../components/home/BestSellingStoreSection'
import ProductsList from '../components/products/ProductsList'
import BannerSection from '../components/home/BannerSection'


const Home = ({categories,categorie,updateCategorie}) => {


  return (
    <>
     
      <HeroSection />
      <CategorySection 
        categories={categories}
        updateCategorie={updateCategorie}
      />
      <FlashSaleSection/>
      <BannerSection />
      <TodayForYouSection />
      <BestSellingStoreSection />
    </>
  )
}

export default Home