import { Link } from 'react-router-dom'
              

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "How To Keep Your Clothes Clean Longer",
      date: "March 15, 2024",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400",
      excerpt: "Tips and tricks to maintain your clothes and keep them fresh longer."
    },
    {
      id: 2,
      title: "Best Detergents For Dry Cleaning",
      date: "March 10, 2024",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400",
      excerpt: "A complete guide to choosing the best detergents for dry cleaning."
    },
    {
      id: 3,
      title: "Why Professional Laundry Is Better",
      date: "March 5, 2024",
      category: "Advice",
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400",
      excerpt: "Discover why professional laundry services are better than home washing."
    },
    {
      id: 4,
      title: "How To Care For Delicate Fabrics",
      date: "February 28, 2024",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      excerpt: "Learn how to properly care for silk, wool and other delicate fabrics."
    },
    {
      id: 5,
      title: "Top 5 Stain Removal Techniques",
      date: "February 20, 2024",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400",
      excerpt: "Professional tips for removing the most stubborn stains from clothes."
    },
    {
      id: 6,
      title: "Eco Friendly Laundry Tips",
      date: "February 15, 2024",
      category: "Advice",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400",
      excerpt: "How to do laundry in an eco-friendly way and save water and energy."
    },
  ]

  return (
    <div>

      <section className="bg-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-purple-200">Home / Blog</p>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-purple-600 text-sm">{blog.date}</p>
                    <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{blog.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-purple-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog