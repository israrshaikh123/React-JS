function Team() {
  return (
    <div>

      {/* Page Header */}
      <section className="bg-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-purple-200">Home / Team</p>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-medium mb-2">Our People</p>
            <h2 className="text-3xl font-bold text-gray-800">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8">

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-1.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">John Smith</h3>
              <p className="text-purple-600 text-sm mb-3">Manager</p>
              <p className="text-gray-500 text-xs">10 years of experience in laundry management</p>
            </div>

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-2.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">Sarah Jones</h3>
              <p className="text-purple-600 text-sm mb-3">Supervisor</p>
              <p className="text-gray-500 text-xs">Expert in quality control and customer service</p>
            </div>

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-3.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">Mike Wilson</h3>
              <p className="text-purple-600 text-sm mb-3">Technician</p>
              <p className="text-gray-500 text-xs">Specialist in dry cleaning and fabric care</p>
            </div>

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-4.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">Emily Davis</h3>
              <p className="text-purple-600 text-sm mb-3">Customer Service</p>
              <p className="text-gray-500 text-xs">Dedicated to providing the best customer experience</p>
            </div>

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-5.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">David Brown</h3>
              <p className="text-purple-600 text-sm mb-3">Delivery Driver</p>
              <p className="text-gray-500 text-xs">Ensures fast and safe delivery to your doorstep</p>
            </div>

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-6.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">Lisa Taylor</h3>
              <p className="text-purple-600 text-sm mb-3">Ironing Specialist</p>
              <p className="text-gray-500 text-xs">Expert in fabric care and professional ironing</p>
            </div>

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-7.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">James Martin</h3>
              <p className="text-purple-600 text-sm mb-3">Stain Specialist</p>
              <p className="text-gray-500 text-xs">Expert in removing tough stains from all fabrics</p>
            </div>

            <div className="text-center border border-gray-100 rounded-2xl p-6 shadow-sm">
              <img
              src='\src\assets\home-page\e-8.png'
                alt="Team Member"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">Anna White</h3>
              <p className="text-purple-600 text-sm mb-3">Quality Control</p>
              <p className="text-gray-500 text-xs">Ensures every garment meets our high standards</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Team