import {
    insertBlog,
    findOneAndUpdateBlog,
    findOneAndRemoveBlog,
    getOneBlog,
    getAllBlogs,
  } from '../repository/blog';
  
  export const createBlog = async (data) => {
    return await insertBlog(data);
  };
  
  export const getBlogs = async (query) => {
    try {
      return await getAllBlogs(query);
    } catch (error) {
      return error;
    }
  };
  
  export const getBlogByID = async (id) => {
    try {
      const blog = await getOneBlog({ _id: id });
      if (!blog)
        return {
          status: 404,
          message: 'Blog not found',
        };
      return blog;
    } catch (error) {
      return error;
    }
  };
  
  export const updateBlogdetails = async (blogId, blogDetails) => {
    try {
      const updatedBlog = await findOneAndUpdateBlog(
        { _id: blogId },
        blogDetails
      );
      if (!updatedBlog)
        return {
          status: 404,
          message: 'Blog not found',
        };
      return updatedBlog;
    } catch (error) {
      return error;
    }
  };
  
  export const deleteById = async (blogId) => {
    try {
      const deleted = await findOneAndRemoveBlog({ _id: blogId });
      if (!deleted)
        return {
          status: 422,
          message: 'Blog not found',
        };
      return {
        status: 200,
        message: 'deleted successfully',
      };
    } catch (error) {
      return error;
    }
  };
  