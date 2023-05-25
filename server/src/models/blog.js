import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const BlogSchema = new mongoose.Schema(
  {
    blog: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    author_name: {
        type: String,
        required: false,
      },
      date: {
        type: String,
        required: false,
      },
      author_image: {
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

BlogSchema.plugin(aggregatePaginate);

BlogSchema.index({ createdAt: 1 });

const Blog = mongoose.model('Blog', BlogSchema);
Blog.syncIndexes();

export default Blog;
