import '../styles/style.css'

const Home = () => {
  return (
    <div className="home">
      <div className="divL">
        <p className="name">Dankoo Baba & ETC Guesthouse</p>
      </div>

      <div className="divR">
        <button className='RBtn'>About us</button>
        <button className='RBtn'>Services</button>
      </div>

      <div className="bookSection">
        <button className="inline-block rounded-sm cursor-pointer border border-indigo-300 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden" >
            Book a room
        </button>
      </div>
    </div>
  )
}

export default Home
