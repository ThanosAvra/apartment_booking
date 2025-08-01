const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  apartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartment', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['PENDING','CONFIRMED','CANCELLED'], default: 'PENDING' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);