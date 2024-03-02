import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true },
)

const optionSchema = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
})

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
    },
    url: {
      type: String,
      required: true,
    },
    numMail: {
      type: String,
      required: true,
      unique: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    brand: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],

    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },

    priceRange: {
      type: Boolean,
      default: false,
    },
    priceRangeMin: {
      type: Number,
      default: 0,
    },
    priceRangeMax: {
      type: Number,
      default: 0,
    },

    fretPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    keywords: [
      {
        type: String,
      },
    ],
    options: [optionSchema],
  },
  {
    timestamps: true,
  },
)

const Product = mongoose.model('Product', productSchema)

export default Product
