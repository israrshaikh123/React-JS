import { Link } from 'react-router-dom'
import { FaTshirt } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      <div className="flex items-center gap-2">
        <FaTshirt className="text-purple-600 text-2xl" />
        <span className="text-xl font-bold text-purple-600">Laundryka</span>
      </div>

      <ul className="flex gap-6 list-none">
        <li><Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">Home</Link></li>
        <li><Link to="/about" className="text-gray-600 hover:text-purple-600 font-medium">About</Link></li>
        <li><Link to="/services" className="text-gray-600 hover:text-purple-600 font-medium">Services</Link></li>
        <li><Link to="/pricing" className="text-gray-600 hover:text-purple-600 font-medium">Pricing</Link></li>
        <li><Link to="/team" className="text-gray-600 hover:text-purple-600 font-medium">Team</Link></li>
        <li><Link to="/blog" className="text-gray-600 hover:text-purple-600 font-medium">Blog</Link></li>
      </ul>

      <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700">
        Get Started
      </button>

    </nav>
  )
}

export default Navbar