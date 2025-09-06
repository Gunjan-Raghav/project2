import { FiSearch, FiMapPin, FiHome } from "react-icons/fi";
import Image from "next/image";

const demoProperties = [
  {
    id: 1,
    title: "2 BHK Apartment in Indiranagar",
    location: "Bengaluru, Karnataka",
    price: "₹ 1.2 Cr",
    area: "1,050 sq.ft",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Studio near Cyber City",
    location: "Gurugram, Haryana",
    price: "₹ 58 Lac",
    area: "520 sq.ft",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "3 BHK Villa with Garden",
    location: "Pune, Maharashtra",
    price: "₹ 2.1 Cr",
    area: "1,850 sq.ft",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "1 BHK in Prime Location",
    location: "Mumbai, Maharashtra",
    price: "₹ 95 Lac",
    area: "610 sq.ft",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Search */}
      <section className="bg-gradient-to-br from-primary-50 to-white border-b">
        <div className="container py-10 md:py-14">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
            Find your next home
          </h1>
          <p className="text-gray-600 mb-6">
            Buy or rent properties across top cities in India
          </p>

          <div className="bg-white rounded-xl shadow-card p-2 md:p-3 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200">
                <FiSearch className="text-gray-500" />
                <input
                  className="w-full outline-none text-sm md:text-base"
                  placeholder="Search locality, landmark, or project"
                />
              </div>
              <div className="grid grid-cols-2 md:flex gap-2">
                <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-primary-300">
                  Buy
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-primary-300">
                  Rent
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-primary-300 hidden md:block">
                  Commercial
                </button>
                <button className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 flex items-center gap-2">
                  <FiMapPin /> Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="container py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Featured Listings
          </h2>
          <button className="text-primary-600 hover:text-primary-700 text-sm">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {demoProperties.map((p) => (
            <article key={p.id} className="card">
              <div className="relative h-44">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate text-sm md:text-base">
                    {p.title}
                  </h3>
                  <FiHome className="text-primary-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                  <FiMapPin /> {p.location}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{p.price}</span>
                  <span className="text-sm text-gray-500">{p.area}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
