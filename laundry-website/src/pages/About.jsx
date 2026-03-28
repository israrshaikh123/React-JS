function About() {
  return (
    <div>

      <section className="bg-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-purple-200">Home / About</p>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-12">

          <div className="w-1/2">
            <img
              src='\src\assets\home-page\i-2.png'
              alt="About"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="w-1/2">
            <p className="text-purple-600 font-medium mb-2">Who We Are</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We Are Professional Laundry Service Providers
            </h2>
            <p className="text-gray-500 mb-4">
              With over 10 years of experience, we have been providing the best laundry services to our customers. Our team of professionals is dedicated to giving you the best quality service.
            </p>
            <p className="text-gray-500 mb-6">
              We use the latest technology and eco-friendly products to ensure your clothes are cleaned perfectly while being gentle on the environment.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600 font-bold">✓</span> 10+ Years Experience
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600 font-bold">✓</span> 6000+ Happy Customers
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600 font-bold">✓</span> Eco Friendly Products
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600 font-bold">✓</span> 24/7 Customer Support
              </li>
            </ul>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
              Contact Us
            </button>
          </div>

        </div>
      </section>

      <section className="py-16 px-8 bg-purple-600 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">6873</h3>
            <p className="text-purple-200">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">11348</h3>
            <p className="text-purple-200">Clothes Cleaned</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">406</h3>
            <p className="text-purple-200">Team Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">180</h3>
            <p className="text-purple-200">Awards Won</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-600 font-medium mb-2">Our Mission</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            We Are Committed To Excellence
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our mission is to provide the highest quality laundry services while maintaining environmental responsibility and customer satisfaction.
          </p>
        </div>
      </section>

    </div>
  )
}

export default About