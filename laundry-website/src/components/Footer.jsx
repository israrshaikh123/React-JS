import { Link } from 'react-router-dom'
import { FaTshirt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-purple-900 text-white pt-12 pb-6 px-8">

      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 mb-8">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaTshirt className="text-white text-2xl" />
            <span className="text-xl font-bold">Laundryka</span>
          </div>
          <p className="text-purple-300 text-sm">
            Easy Laundry Services Forever. We provide the best laundry services in town.
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebook className="text-purple-300 hover:text-white cursor-pointer text-xl" />
            <FaTwitter className="text-purple-300 hover:text-white cursor-pointer text-xl" />
            <FaInstagram className="text-purple-300 hover:text-white cursor-pointer text-xl" />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-purple-300 hover:text-white text-sm">Home</Link></li>
            <li><Link to="/about" className="text-purple-300 hover:text-white text-sm">About</Link></li>
            <li><Link to="/services" className="text-purple-300 hover:text-white text-sm">Services</Link></li>
            <li><Link to="/pricing" className="text-purple-300 hover:text-white text-sm">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Services</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-purple-300 text-sm">Wash & Fold</li>
            <li className="text-purple-300 text-sm">Dry Cleaning</li>
            <li className="text-purple-300 text-sm">Ironing</li>
            <li className="text-purple-300 text-sm">Delivery</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p className="text-purple-300 text-sm mb-2">123 Laundry Street</p>
          <p className="text-purple-300 text-sm mb-2">info@laundryka.com</p>
          <p className="text-purple-300 text-sm">+91 73599 76835</p>
        </div>

      </div>

      <div className="border-t border-purple-800 pt-4 text-center">
        <p className="text-purple-300 text-sm">
          © 2026 Israr Shaikh. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer