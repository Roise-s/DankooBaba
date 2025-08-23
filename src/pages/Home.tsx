import '../styles/style.css'
import { useNavigate } from 'react-router-dom' // Add this import

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and redirect to home page
  const handleBookRoomClick = () => {
    navigate('/'); // Redirects to the home page
  }

  return (
    <div className="home">
      <div className="divL">
        <button className="name"
            onClick={handleBookRoomClick} // Add the onClick handler
        >
            Dankoo Baba & ETC Guesthouse
        </button>
      </div>

      <div className="divR">
        <button className='RBtn'>About us</button>
        <button className='RBtn'>Services</button>
      </div>

      <div className="bookSection">
        <button
          className="inline-block rounded-sm cursor-pointer border border-indigo-300 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        >
          Book a room
        </button>
      </div>
    </div>
  )
}

export default Home
