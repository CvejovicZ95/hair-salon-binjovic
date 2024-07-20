import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => new Date().toLocaleString()
  }
})

const Order = mongoose.model('Order', orderSchema)

export { Order }
