import BestSellers from "../Home/BestSellers/BestSellers"
import BrandStory from "../Home/BrandStory/BrandStory"
import BudgetStore from "../Home/BudgetStore/BudgetStore"
import CustomerReviews from "../Home/CustomerReviews/CustomerReviews"
import FabricStories from "../Home/FabricStories/FabricStories"
import HomepageBanner from "../Home/HomepageBanner/HomepageBanner"
import NewArrivals from "../Home/NewArrivals/NewArrivals"
import TrendingSection from "../Home/TrendingSection/TrendingSection"


const Homepage = () => {
  return (
    <>
     <HomepageBanner />
     <TrendingSection />
     <NewArrivals />
     <BestSellers />
     {/* <FabricStories /> */}
     <BudgetStore />
     <CustomerReviews />
     {/* <BrandStory /> */}
    </>
  )
}

export default Homepage