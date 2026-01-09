
import React, { useState } from 'react';
import { Box } from '../types';
import { TIME_SLOTS } from '../constants';

interface BookingModalProps {
  box: Box | null;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ box, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!box) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Booking: {box.name}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-2 tracking-wider">Select Date</label>
                <input 
                  type="date" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-lime-400 outline-none"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-2 tracking-wider">Select Slot</label>
                <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {TIME_SLOTS.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2 text-xs rounded border transition-all ${
                        selectedSlot === slot 
                        ? 'bg-lime-400 border-lime-400 text-zinc-900 font-bold' 
                        : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                disabled={!selectedDate || !selectedSlot}
                onClick={() => setStep(2)}
                className="w-full bg-lime-400 text-zinc-900 font-bold py-3 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-lime-300 transition-colors"
              >
                Continue to Details
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="flex gap-4 p-4 bg-zinc-800/50 rounded-lg border border-zinc-800 mb-4">
                <div className="flex-1">
                  <p className="text-xs text-zinc-500 uppercase font-bold">Slot</p>
                  <p className="text-white font-medium">{selectedDate} @ {selectedSlot}</p>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-xs text-zinc-500 uppercase font-bold">Price</p>
                  <p className="text-lime-400 font-bold text-lg">₹{box.pricePerHour}</p>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-2 tracking-wider">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-lime-400 outline-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-2 tracking-wider">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-lime-400 outline-none"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-2 tracking-wider">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-lime-400 outline-none"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-lime-400 text-zinc-900 font-bold py-3 rounded-lg hover:bg-lime-300 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
              <p className="text-zinc-400 mb-6">We've sent the details to {formData.email}. Get ready for the game!</p>
              <button 
                onClick={onClose}
                className="bg-zinc-800 text-white px-8 py-3 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
