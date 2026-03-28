function Pricing() {
  return (
    <div>

      <section className="bg-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-purple-200">Home / Pricing</p>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-600 font-medium mb-2">Our Plans</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Choose Your Plan
          </h2>

          <div className="grid grid-cols-3 gap-8">

            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-gray-800 text-xl mb-2">Basic</h3>
              <p className="text-gray-500 text-sm mb-4">Perfect for individuals</p>
              <p className="text-4xl font-bold text-purple-600 mb-6">
                $10<span className="text-lg text-gray-400">/mo</span>
              </p>
              <ul className="flex flex-col gap-3 mb-8 text-left">
                <li className="text-gray-600 text-sm">✓ 5kg Laundry</li>
                <li className="text-gray-600 text-sm">✓ Wash & Fold</li>
                <li className="text-gray-600 text-sm">✓ 2 Day Delivery</li>
                <li className="text-gray-400 text-sm">✗ Dry Cleaning</li>
                <li className="text-gray-400 text-sm">✗ Express Service</li>
                <li className="text-gray-400 text-sm">✗ Priority Support</li>
              </ul>
              <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-full hover:bg-purple-50">
                Get Started
              </button>
            </div>

            <div className="bg-purple-600 rounded-2xl p-8 shadow-lg text-white">
              <div className="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                POPULAR
              </div>
              <h3 className="font-bold text-xl mb-2">Standard</h3>
              <p className="text-purple-200 text-sm mb-4">Perfect for families</p>
              <p className="text-4xl font-bold mb-6">
                $50<span className="text-lg text-purple-200">/mo</span>
              </p>
              <ul className="flex flex-col gap-3 mb-8 text-left">
                <li className="text-white text-sm">✓ 15kg Laundry</li>
                <li className="text-white text-sm">✓ Wash & Fold</li>
                <li className="text-white text-sm">✓ Same Day Delivery</li>
                <li className="text-white text-sm">✓ Dry Cleaning</li>
                <li className="text-purple-200 text-sm">✗ Express Service</li>
                <li className="text-purple-200 text-sm">✗ Priority Support</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-full hover:bg-purple-100 font-semibold">
                Get Started
              </button>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-gray-800 text-xl mb-2">Premium</h3>
              <p className="text-gray-500 text-sm mb-4">Perfect for businesses</p>
              <p className="text-4xl font-bold text-purple-600 mb-6">
                $90<span className="text-lg text-gray-400">/mo</span>
              </p>
              <ul className="flex flex-col gap-3 mb-8 text-left">
                <li className="text-gray-600 text-sm">✓ Unlimited Laundry</li>
                <li className="text-gray-600 text-sm">✓ Wash & Fold</li>
                <li className="text-gray-600 text-sm">✓ Express Delivery</li>
                <li className="text-gray-600 text-sm">✓ Dry Cleaning</li>
                <li className="text-gray-600 text-sm">✓ Express Service</li>
                <li className="text-gray-600 text-sm">✓ Priority Support</li>
              </ul>
              <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-full hover:bg-purple-50">
                Get Started
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-medium mb-2">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">How do I get started?</h3>
              <p className="text-gray-500 text-sm">Simply choose a plan and contact us. We will schedule a pickup at your convenience.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-500 text-sm">Yes, you can cancel your subscription anytime without any cancellation fees.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">How long does cleaning take?</h3>
              <p className="text-gray-500 text-sm">Standard cleaning takes 24-48 hours. Express service is available for same day delivery.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Pricing