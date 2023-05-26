import {
    insertArticle,
    findOneAndUpdateArticle,
    findOneAndRemoveArticle,
    getOneArticle,
    getAllArticles,
  } from '../repository/article';
  
  export const createArticle = async (data) => {
    return await insertArticle(data);
  };
  
  export const getArticles = async (query) => {
    try {
      return await getAllArticles(query);
    } catch (error) {
      return error;
    }
  };
  
  export const getArticleByID = async (id) => {
    try {
      const article = await getOneArticle({ _id: id });
      if (!article)
        return {
          status: 404,
          message: 'Article not found',
        };
      return article;
    } catch (error) {
      return error;
    }
  };
  
  export const updateArticledetails = async (articleId, articleDetails) => {
    try {
      const updatedArticle = await findOneAndUpdateArticle(
        { _id: articleId },
        articleDetails
      );
      if (!updatedArticle)
        return {
          status: 404,
          message: 'Article not found',
        };
      return updatedArticle;
    } catch (error) {
      return error;
    }
  };
  
  export const deleteById = async (articleId) => {
    try {
      const deleted = await findOneAndRemoveArticle({ _id: articleId });
      if (!deleted)
        return {
          status: 422,
          message: 'Article not found',
        };
      return {
        status: 200,
        message: 'deleted successfully',
      };
    } catch (error) {
      return error;
    }
  };
  