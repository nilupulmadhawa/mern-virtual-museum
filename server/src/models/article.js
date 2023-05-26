import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const ArticleSchema = new mongoose.Schema(
  {
    article: {
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

ArticleSchema.plugin(aggregatePaginate);

ArticleSchema.index({ createdAt: 1 });

const Article = mongoose.model('Article', ArticleSchema);
Article.syncIndexes();

export default Article;
