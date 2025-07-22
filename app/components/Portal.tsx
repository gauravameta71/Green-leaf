import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle,
  Leaf,
  Calendar,
  ExternalLink,
} from "lucide-react";

export default function PhysiotherapyPortal() {
  const services = [
    {
      name: "Physiotherapy",
      price: "£30",
      duration: "30 mins",
      description: "Expert treatment for pain relief and recovery",
    },
    {
      name: "CBT Therapy",
      price: "£60",
      duration: "60 mins",
      description: "Cognitive behavioral therapy for mental wellness",
    },
    {
      name: "Postural Assessment",
      price: "£45",
      duration: "45 mins",
      description: "Comprehensive posture analysis and correction",
    },
  ];

  const trustBadges = [
    "HCPC Registered",
    "Data Secure",
    "NHS Trained Staff",
    "GDPR Compliant",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Green Leaf Therapy Clinic
                </h1>
                <p className="text-sm text-green-600 font-medium">
                  PrivadoCare+ Network
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/green-leaf-booking">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
              </a>

              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200">
                <ExternalLink className="w-5 h-5" />
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Clinic Overview */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Personalized Physiotherapy for Pain Relief and Recovery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Helping you heal naturally through expert physiotherapy treatments
            tailored to your individual needs. Our experienced team is dedicated
            to getting you back to your best.
          </p>
        </section>

        {/* Trust Badges */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white border border-green-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-800">
                    {service.name}
                  </h4>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.duration}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 w-full bg-green-50 hover:bg-green-100 text-green-600 py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Location and Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Map Section */}
          <section className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              Find Us
            </h3>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>Interactive Map</p>
                <p className="text-sm">Google Maps integration</p>
              </div>
            </div>
            <p className="text-gray-600">
              <strong>Address:</strong>
              <br />
              123 Wellness Street
              <br />
              Health District, HD1 2AB
              <br />
              London, UK
            </p>
          </section>

          {/* Contact Info */}
          <section className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-green-600">020 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-green-600">hello@greenleaftherapy.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Opening Hours</p>
                  <div className="text-gray-600 text-sm">
                    <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </section>
        </div>

        {/* Emergency Contact */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-6 text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Need Urgent Care?</h3>
          <p className="mb-4">
            For urgent appointments or emergency consultations
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
            Emergency Contact: 020 1234 9999
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                © 2025 Green Leaf Therapy Clinic. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Registered with HCPC • Privacy Policy • Terms of Service
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                Powered by{" "}
                <span className="text-green-600 font-semibold">
                  PrivadoCare+
                </span>
              </p>
              <p className="text-gray-400 text-xs">
                Smart Admin for Private Clinics
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
