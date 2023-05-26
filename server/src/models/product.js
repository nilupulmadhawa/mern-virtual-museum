import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const ProductSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

ProductSchema.plugin(aggregatePaginate);

ProductSchema.index({ createdAt: 1 });

const Product = mongoose.model('Product', ProductSchema);
Product.syncIndexes();

export default Product;
