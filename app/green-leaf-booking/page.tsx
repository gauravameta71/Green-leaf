/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const BookingPage = () => {
  const [services] = useState([
    { name: 'Physiotherapy', price: 500, duration: 30 },
    { name: 'Consultation', price: 300, duration: 15 },
    { name: 'Rehabilitation Session', price: 800, duration: 60 },
  ]);

  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSlots = async () => {
      if (!selectedDate || !selectedService) return;
      setIsLoadingSlots(true);
      try {
        const res = await axios.post('/api/calendar/availability', {
          date: selectedDate,
          duration: selectedService.duration,
        });
        setAvailableSlots(res.data.slots);
      } catch (err) {
        setAvailableSlots([]);
      }
      setIsLoadingSlots(false);
    };
    fetchSlots();
  }, [selectedDate, selectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      setMessage('Please select a time slot.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/movljpbv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService.name,
          price: selectedService.price,
          date: selectedDate,
          time: selectedSlot,
          ...formData,
        }),
      });

      if (res.ok) {
        setMessage('Booking successful!');
        setFormData({ name: '', email: '', phone: '' });
        setSelectedDate('');
        setSelectedSlot('');
      } else {
        setMessage('Submission failed. Please try again.');
      }
    } catch (err) {
      setMessage('Error submitting the form.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 text-center">Book an Appointment</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Selection */}
          <div>
            <label className="block font-medium mb-1">Select Service</label>
            <select
              value={selectedService.name}
              onChange={(e) =>
                setSelectedService(
                  services.find((s) => s.name === e.target.value) || services[0]
                )
              }
              className="w-full border rounded px-3 py-2"
            >
              {services.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name} - £{service.price} / {service.duration} min
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block font-medium mb-1">Select Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          {/* Time Slots */}
          <div>
            <label className="block font-medium mb-1">Available Time Slots</label>
            {isLoadingSlots ? (
              <p className="text-sm text-gray-500">Loading...</p>
            ) : availableSlots.length === 0 ? (
              <p className="text-sm text-red-500">No slots available.</p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`border rounded px-2 py-1 text-sm ${
                      selectedSlot === slot
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-blue-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
          >
            {isSubmitting ? 'Booking...' : 'Book Appointment'}
          </button>

          {message && <p className="text-center mt-2 text-sm text-blue-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default BookingPage;