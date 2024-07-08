import AboutUs from "../components/Home/AboutUs"
import Hero from "../components/Home/Hero"
import InventoryTrucks from "../components/Home/InventoryTrucks"
import RentingForm from "../components/Home/RentingForm"
import RentingSteps from "../components/Home/RentingSteps"
import VanTrucks from "../components/Home/VanTrucks"

const HomeScreen = () => {
  return (
    <div>
        <Hero />
        <InventoryTrucks />
        <VanTrucks />
        <RentingSteps />
        <AboutUs />
        <RentingForm />
    </div>
  )
}

export default HomeScreen