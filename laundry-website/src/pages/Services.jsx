function Services() {
  return (
    <div>

      <section className="bg-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-purple-200">Home / Services</p>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-medium mb-2">What We Offer</p>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Best Services
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">👕</span>
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-2">Dry Cleaning</h3>
              <p className="text-gray-500 text-sm mb-4">Professional dry cleaning for all types of garments including suits, dresses, and delicate fabrics.</p>
              <p className="text-purple-600 font-bold">Starting from $10</p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">🧺</span>
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-2">Wash & Fold</h3>
              <p className="text-gray-500 text-sm mb-4">Quick and easy wash and fold service for your everyday clothes. Same day service available.</p>
              <p className="text-purple-600 font-bold">Starting from $8</p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">👔</span>
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-2">Ironing</h3>
              <p className="text-gray-500 text-sm mb-4">Professional ironing service to keep your clothes wrinkle-free and looking their best.</p>
              <p className="text-purple-600 font-bold">Starting from $5</p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">🚚</span>
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-2">Pickup & Delivery</h3>
              <p className="text-gray-500 text-sm mb-4">Free pickup and delivery at your doorstep. Schedule a pickup at your convenience.</p>
              <p className="text-purple-600 font-bold">Free with orders $30+</p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">👶</span>
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-2">Baby Clothes</h3>
              <p className="text-gray-500 text-sm mb-4">Special gentle care for baby clothes using hypoallergenic and safe cleaning products.</p>
              <p className="text-purple-600 font-bold">Starting from $12</p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-2">Home Textile</h3>
              <p className="text-gray-500 text-sm mb-4">Cleaning service for curtains, bedsheets, carpets and other home textiles.</p>
              <p className="text-purple-600 font-bold">Starting from $15</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready To Get Started?
        </h2>
        <p className="text-purple-200 mb-8">
          Contact us today and get your first order with 20% discount!
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100">
          Book Now
        </button>
      </section>

    </div>
  )
}

export default Services