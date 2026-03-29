function Contact() {
  return (
    <div>

      <section className="bg-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-purple-200">Home / Contact</p>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex gap-12">

          <div className="w-1/2">
            <p className="text-purple-600 font-medium mb-2">Get In Touch</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us A Message
            </h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-200 rounded-lg p-3 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-200 rounded-lg p-3 outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-200 rounded-lg p-3 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border border-gray-200 rounded-lg p-3 outline-none"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-1/2">
            <p className="text-purple-600 font-medium mb-2">Contact Info</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              We Are Here To Help
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-500">123 Laundry Street, Clean City, 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-500">+012 345 678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-500">info@laundryka.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 text-xl">🕐</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
                  <p className="text-gray-500">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-500">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact