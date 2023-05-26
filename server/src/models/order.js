import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const OrderSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    qty: {
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

OrderSchema.plugin(aggregatePaginate);

OrderSchema.index({ createdAt: 1 });

const Order = mongoose.model('Order', OrderSchema);
Order.syncIndexes();

export default Order;
