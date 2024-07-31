import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: [
      'Feniranje',
      'Šišanje',
      'Farbanje',
      'Šatiranje/Blajhanje',
      'Steam pod',
      'Frizura',
      'Keratin',
      'Nadogradnja',
      'Tretmani'
    ],
    required: true
  },
  deleted: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Service = mongoose.model('Service', serviceSchema)

export { Service }
