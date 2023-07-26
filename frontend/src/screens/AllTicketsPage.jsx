import TicketCarousel from '../components/TicketsPage/TicketCarousel'
import Trending from '../components/TicketsPage/Trending'
import TicketFilter from '../components/TicketsPage/TicketFilter'
import Tickets from '../components/TicketsPage/Tickets'
import Footer from '../components/landingPage/Footer'

const AllTicketsPage = () => {
  return (
    <>
      <TicketCarousel />
      <Trending />
      <TicketFilter />
      <Tickets />
      {/* <Footer /> */}
    </>
  )
}

export default AllTicketsPage
