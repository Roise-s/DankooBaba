import Header from '@/components/header'
import '../styles/style.css'
import MainHome from '@/components/MainHome'
import Footer from '@/components/Footer'
import MiddleSection from '@/components/MiddleSection'
import View from '@/components/View'
import Bookings from '@/components/Bookings'

const Home = () => {

  return (
    <>
     <Header />
     <MainHome /> 
     <View />
     <Bookings />
     <MiddleSection />
     <Footer />
    </>
  )
}

export default Home
