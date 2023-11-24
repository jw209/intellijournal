import logo from './logo.png'
import { Outlet, Link } from 'react-router-dom'

function App() {
  const showMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('hidden')
  }

  return (
    /* top-level container for items placed in html 'root' */
    <div>
      {/* navbar */}
      <nav className="bg-indigo-500 text-white drop-shadow-2xl">
        <div className="px-2 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-1">
              {/* logo */}
                <img src={logo} alt="logo" className="w-24 flex items-center" />
                <h1 className="text-2xl font-bold flex items-center pr-8">
                  <Link to="/">Intellijournal</Link>
                </h1>
                {/* primary nav */}
                <div className="hidden md:flex items-center space-x-6">
                  <Link to="/why" className="hover:text-gray-300">Why Intellijournal?</Link>
                  <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
                </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center pr-8">
              <Link to="/login" className="hover:text-gray-300">Login</Link>
            </div>
            {/* mobile nav opener */}
            <button className="md:hidden flex items-center pr-8" onClick={() => {showMobileMenu()}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </button>
          </div>
        </div>
        {/* mobile options */}
        <div className="mobile-menu hidden md:hidden">
          <Link to="/why" className="block py-4 px-8 hover:text-gray-300">Why Intellijournal?</Link>
          <Link to="/pricing" className="block py-4 px-8 hover:text-gray-300">Pricing</Link>
          <Link to="/login" className="block py-4 px-8 hover:text-gray-300">Login</Link>
        </div>
      </nav>
      {/* content of pages goes here */}
      <div>
        <div className="p-8 bg-gradient-to-b from-indigo-500 to-sky-500 min-h-[calc(90.6vh-97px)] overflow-auto text-indigo-500">
          <div className="bg-sky-100 p-8 rounded-2xl">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-sky-500 to-indigo-500 h-8xl">
        <h1 className="text-2xl font-bold flex items-center justify-center text-white">
          Intellijournal &#169; 2023
        </h1>
        <div className="flex items-center justify-center py-8 space-x-6 text-white">
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/privacy" className="hover:text-gray-300">Privacy</Link>
          <Link to="/contributors" className="hover:text-gray-300">Contributors</Link>
          <Link to="/mission" className="hover:text-gray-300">Mission</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
