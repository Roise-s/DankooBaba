import '../styles/style.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and redirect to home page
  const handleBookRoomClick = () => {
    navigate('/'); // Redirects to the home page
  }

  return (
    <header className='header'>
      <div className="divL">
        <button className="name"
            onClick={handleBookRoomClick} // Add the onClick handler
        >
            Dankoo Baba & ETC Guesthouse
        </button>
      </div>

      <div className="bookSection">
        <button
          className="inline-block rounded-sm cursor-pointer border border-indigo-300 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        >
          Services
        </button>
      </div>
    </header>
  )
}

export default Header
