import { BadgeDollarSign, Car, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900 flex items-center justify-center">
        <img
          src="/about-hero.jpg"
          alt="Car Dealership"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Driving Excellence Since 2005
          </h1>
          <p className="text-xl md:text-2xl">
            Your Trusted Partner in Automotive Excellence
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At AutoElite Motors, we're committed to redefining car ownership
            through exceptional service, premium quality vehicles, and
            transparent transactions. Our mission is to be more than just a
            dealership - we aim to be your lifelong automotive partner.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="mb-4 text-emerald-600">
              <Car className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
            <p className="text-gray-600">
              Every vehicle undergoes a 150-point inspection to ensure premium
              quality and reliability
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="mb-4 text-emerald-600">
              <BadgeDollarSign className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
            <p className="text-gray-600">
              Transparent pricing with no hidden fees and guaranteed best market
              value
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="mb-4 text-emerald-600">
              <ShieldCheck className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lifetime Support</h3>
            <p className="text-gray-600">
              24/7 roadside assistance and lifetime maintenance packages
              included
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="/dealership-history.jpg"
            alt="Dealership History"
            className="rounded-lg shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2005 by automotive enthusiast Michael Torres, AutoElite
              Motors started as a small family-owned lot with just 10 vehicles.
              Today, we're proud to be one of the region's most trusted
              dealerships, having served over 15,000 satisfied customers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <p className="text-2xl font-bold text-emerald-600">18+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-lg">
                <p className="text-2xl font-bold text-emerald-600">4.9/5</p>
                <p className="text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Torres",
                role: "CEO & Founder",
                img: "/team-ceo.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "Sales Director",
                img: "/team-sales.jpg",
              },
              {
                name: "David Chen",
                role: "Service Manager",
                img: "/team-service.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Experience the Difference</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Ready to find your perfect vehicle? Visit our showroom or browse our
            online inventory to start your journey with AutoElite Motors.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/products"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
