import React, { useState } from 'react';
import { 
  Home, 
  DollarSign, 
  Waves, 
  Trees,
  Phone,
  Mail,
  MapPin,
  Share2,
  ArrowRight,
  Camera
} from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "/lake-dock.jpg",
    alt: "Lake dock view at Twin Lakes Resort"
  },
  {
    id: 2,
    src: "/outdoor-lounge.jpg",
    alt: "Outdoor lounge area"
  },
  {
    id: 3,
    src: "/lake-view-seating.jpg",
    alt: "Lake view seating area"
  },
  {
    id: 4,
    src: "/lakeside-lot.jpg",
    alt: "Lakeside lot view"
  },
  {
    id: 5,
    src: "/vessel-homes.jpg",
    alt: "Vessel homes view"
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://twinlakesresorttexas.com/media/66aba4c2d581d2aa9a05a866/original.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4 text-shadow-lg">
                Own a Slice of Paradise at <a href="https://twinlakesresorttexas.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400 underline decoration-2 transition-colors">Twin Lakes Resort</a>, Texas!
              </h1>
              <p className="text-xl mb-8 font-bold text-black bg-white/80 px-4 py-2 rounded-lg inline-block">
                Rare Opportunity to Own a Premium Lake View Vessel Home Lot in a Luxury RV and Tiny Home Resort
              </p>
              <div className="inline-block bg-black/75 px-6 py-3 rounded-lg border-l-4 border-red-600 mb-8">
                <p className="text-lg">
                  Only 8-9 lots like this in the entire resort! Don't miss out on this exclusive opportunity.
                </p>
              </div>
              <div className="flex items-center gap-2 mb-8 bg-white/90 text-black px-4 py-2 rounded-lg inline-block">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="font-medium">50 County Rd 3227, Mt Pleasant, TX 75455</p>
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 shadow-lg transition-all duration-200">
                  Inquire Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Property Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why This Property is Special</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Location</h3>
              <p>Nestled in Twin Lakes Resort with stunning lake views and serene environment.</p>
              <a 
                href="https://maps.google.com/?q=50+County+Rd+3227+Mt+Pleasant+TX+75455" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rare Vessel Home Lot</h3>
              <p>One of only 8-9 vessel home lots available in the entire resort.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Trees className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spacious Property</h3>
              <p>1786 sqft of premium lake-view space ready for your dream home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Affordable Luxury Awaits You</h2>
          <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Original Price</h3>
                  <p className="text-lg">$159,900</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DollarSign className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Amount Already Paid</h3>
                  <p className="text-lg">$37,000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Monthly Fee</h3>
                  <p className="text-lg">$300/month for resort amenities and maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Live the Resort Life</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80" 
              alt="Resort Amenities" 
              className="rounded-lg shadow-lg h-96 w-full object-cover"
            />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Waves className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p>Luxury RV and Tiny Home Resort with over 100 RV pads</p>
              </div>
              <div className="flex items-start gap-4">
                <Home className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p>On-site property management for peace of mind</p>
              </div>
              <div className="flex items-start gap-4">
                <Camera className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p>Full utilities: water, power, and high-speed internet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch Today!</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Twin Lakes Resort, Texas – Where Luxury Meets Nature</h3>
            <div className="flex justify-center items-center gap-6 mb-6">
              <a href="tel:+1234567890" className="hover:text-blue-400">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:info@twinlakesresorttexas.com" className="hover:text-blue-400">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://twinlakesresorttexas.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Share2 className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">
              <a 
                href="https://twinlakesresorttexas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Visit Twin Lakes Resort Website
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;