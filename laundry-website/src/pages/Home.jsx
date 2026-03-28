function Home() {
  return (
    <div>
      <section className="bg-purple-600 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="max-w-lg">
            <p className="text-purple-200 mb-2">Pickup · Cleaning · Delivery</p>
            <h1 className="text-5xl font-bold mb-4">
              Easy Laundry Services Forever
            </h1>
            <p className="text-purple-200 mb-6">
              We provide the best laundry services in town. Fast, reliable and
              affordable.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100">
                Get Started
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="\src\assets\home-page\i-1.png"
              alt="Laundry"
              className="rounded-2xl w-80"
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-600 font-medium mb-2">Process</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-5 rounded-full mb-4">
                <span className="text-purple-600 text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Sign Up</h3>
              <p className="text-gray-500 text-sm">
                Create your account and get started easily
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-5 rounded-full mb-4">
                <span className="text-purple-600 text-2xl">👕</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Pick Up</h3>
              <p className="text-gray-500 text-sm">
                We pick up your clothes from your doorstep
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-5 rounded-full mb-4">
                <span className="text-purple-600 text-2xl">🧺</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Cleaning</h3>
              <p className="text-gray-500 text-sm">
                We clean your clothes with best quality
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-5 rounded-full mb-4">
                <span className="text-purple-600 text-2xl">🚚</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Delivery</h3>
              <p className="text-gray-500 text-sm">
                We deliver your clothes back to you
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-12">
          <div className="w-1/2">
            <img
              src="\src\assets\home-page\i-2.png"
              alt="About Us"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="w-1/2">
            <p className="text-purple-600 font-medium mb-2">About Us</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              This Is Best Chance To Know More About Us
            </h2>
            <p className="text-gray-500 mb-4">
              We are a professional laundry service provider with years of
              experience. Our team is dedicated to providing the best quality
              service to our customers.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">✓</span> Professional Cleaning
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">✓</span> Fast Delivery
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">✓</span> Affordable Prices
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">✓</span> 24/7 Support
              </li>
            </ul>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-600 font-medium mb-2">What We Do</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Best Services
          </h2>

          <div className="grid grid-cols-3 gap-8">
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">👕</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Dry Cleaning</h3>
              <p className="text-gray-500 text-sm">
                Professional dry cleaning for all types of garments
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">🧺</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Wash & Fold</h3>
              <p className="text-gray-500 text-sm">
                Quick and easy wash and fold service
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">👔</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Ironing</h3>
              <p className="text-gray-500 text-sm">
                Professional ironing service for your clothes
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">🚚</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                Pickup & Delivery
              </h3>
              <p className="text-gray-500 text-sm">
                Free pickup and delivery at your doorstep
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">👶</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Baby Clothes</h3>
              <p className="text-gray-500 text-sm">
                Special care for baby clothes and fabric
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Home Textile</h3>
              <p className="text-gray-500 text-sm">
                Cleaning service for curtains, bedsheets and more
              </p>
            </div>
          </div>

          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 mt-10">
            View All Services
          </button>
        </div>
      </section>
      <section className="py-16 px-8 bg-purple-600">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="w-1/2">
            <img
              src='\src\assets\home-page\i-3.png'
              alt="App Download"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="w-1/2 text-white pl-12">
            <h2 className="text-3xl font-bold mb-4">
              We Are Also Available On Mobile App
            </h2>
            <p className="text-purple-200 mb-6">
              Download our app and get your laundry done with just a few taps.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100">
                App Store
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-600 font-medium mb-2">Our Plans</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Pricing Plan
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {/* Basic */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-gray-800 text-xl mb-2">Basic</h3>
              <p className="text-gray-500 text-sm mb-4">
                Perfect for individuals
              </p>
              <p className="text-4xl font-bold text-purple-600 mb-6">
                $10<span className="text-lg text-gray-400">/mo</span>
              </p>
              <ul className="flex flex-col gap-3 mb-8 text-left">
                <li className="text-gray-600 text-sm">✓ 5kg Laundry</li>
                <li className="text-gray-600 text-sm">✓ Wash & Fold</li>
                <li className="text-gray-600 text-sm">✓ 2 Day Delivery</li>
                <li className="text-gray-400 text-sm">✗ Dry Cleaning</li>
                <li className="text-gray-400 text-sm">✗ Express Service</li>
              </ul>
              <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-full hover:bg-purple-50">
                Get Started
              </button>
            </div>

            <div className="bg-purple-600 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="font-bold text-xl mb-2">Standard</h3>
              <p className="text-purple-200 text-sm mb-4">
                Perfect for families
              </p>
              <p className="text-4xl font-bold mb-6">
                $50<span className="text-lg text-purple-200">/mo</span>
              </p>
              <ul className="flex flex-col gap-3 mb-8 text-left">
                <li className="text-white text-sm">✓ 15kg Laundry</li>
                <li className="text-white text-sm">✓ Wash & Fold</li>
                <li className="text-white text-sm">✓ Same Day Delivery</li>
                <li className="text-white text-sm">✓ Dry Cleaning</li>
                <li className="text-purple-200 text-sm">✗ Express Service</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-full hover:bg-purple-100 font-semibold">
                Get Started
              </button>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-gray-800 text-xl mb-2">Premium</h3>
              <p className="text-gray-500 text-sm mb-4">
                Perfect for businesses
              </p>
              <p className="text-4xl font-bold text-purple-600 mb-6">
                $90<span className="text-lg text-gray-400">/mo</span>
              </p>
              <ul className="flex flex-col gap-3 mb-8 text-left">
                <li className="text-gray-600 text-sm">✓ Unlimited Laundry</li>
                <li className="text-gray-600 text-sm">✓ Wash & Fold</li>
                <li className="text-gray-600 text-sm">✓ Express Delivery</li>
                <li className="text-gray-600 text-sm">✓ Dry Cleaning</li>
                <li className="text-gray-600 text-sm">✓ Express Service</li>
              </ul>
              <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-full hover:bg-purple-50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-700 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold mb-2">6873</h3>
                <p className="text-purple-200 text-sm">Happy Customers</p>
              </div>
              <div className="bg-purple-700 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold mb-2">11348</h3>
                <p className="text-purple-200 text-sm">Clothes Cleaned</p>
              </div>
              <div className="bg-purple-700 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold mb-2">406</h3>
                <p className="text-purple-200 text-sm">Team Members</p>
              </div>
              <div className="bg-purple-700 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold mb-2">180</h3>
                <p className="text-purple-200 text-sm">Awards Won</p>
              </div>
            </div>

            <div className="pl-8">
              <h2 className="text-3xl font-bold mb-4">Call Now: 012-345-678</h2>
              <p className="text-purple-200 mb-6">
                We are available 24/7 to serve you. Call us now and get the best
                laundry service at your doorstep.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-600 font-medium mb-2">Our People</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Team</h2>

          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <img
              src="\src\assets\home-page\e-1.png"
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">John Smith</h3>
              <p className="text-purple-600 text-sm">Manager</p>
            </div>

            <div className="text-center">
              <img
              src="\src\assets\home-page\e-2.png"
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">Sarah Jones</h3>
              <p className="text-purple-600 text-sm">Supervisor</p>
            </div>

            <div className="text-center">
              <img
              src="\src\assets\home-page\e-3.png"
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">Mike Wilson</h3>
              <p className="text-purple-600 text-sm">Technician</p>
            </div>

            <div className="text-center">
              <img
              src="\src\assets\home-page\e-4.png"
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">Emily Davis</h3>
              <p className="text-purple-600 text-sm">Customer Service</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe For Newsletter
          </h2>
          <p className="text-gray-500 mb-8">
            Get the latest news and updates from us directly in your inbox.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 border border-gray-300 rounded-full px-6 py-3 outline-none"
            />
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-medium mb-2">News & Tips</p>
            <h2 className="text-3xl font-bold text-gray-800">Latest Blog</h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
              <img
              src="\src\assets\home-page\i-3.png"
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-purple-600 text-sm mb-2">March 15, 2024</p>
                <h3 className="font-bold text-gray-800 mb-2">
                  How To Keep Your Clothes Clean Longer
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Tips and tricks to maintain your clothes and keep them fresh
                  longer.
                </p>
                <button className="text-purple-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
              <img
              src="\src\assets\home-page\i-2.png"
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-purple-600 text-sm mb-2">March 10, 2024</p>
                <h3 className="font-bold text-gray-800 mb-2">
                  Best Detergents For Dry Cleaning
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Tips and tricks to maintain your clothes and keep them fresh
                  longer.
                </p>
                <button className="text-purple-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
              <img
              src="\src\assets\home-page\i-1.png"
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-purple-600 text-sm mb-2">March 5, 2024</p>
                <h3 className="font-bold text-gray-800 mb-2">
                  Why Professional Laundry Is Better
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Tips and tricks to maintain your clothes and keep them fresh
                  longer.
                </p>
                <button className="text-purple-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
