import {
  insertCategory,
  findOneAndUpdateCategory,
  findOneAndRemoveCategory,
  getOneCategory,
  getAllCategories,
} from '../repository/category';

export const createCategory = async (data) => {
  return await insertCategory(data);
};

export const getCategories = async (query) => {
  try {
    return await getAllCategories(query);
  } catch (error) {
    return error;
  }
};

export const getCategoryByID = async (id) => {
  try {
    const category = await getOneCategory({ _id: id });
    if (!category)
      return {
        status: 404,
        message: 'Category not found',
      };
    return category;
  } catch (error) {
    return error;
  }
};

export const updateCategorydetails = async (categoryId, categoryDetails) => {
  try {
    const updatedCategory = await findOneAndUpdateCategory(
      { _id: categoryId },
      categoryDetails
    );
    if (!updatedCategory)
      return {
        status: 404,
        message: 'Category not found',
      };
    return updatedCategory;
  } catch (error) {
    return error;
  }
};

export const deleteById = async (categoryId) => {
  try {
    const deleted = await findOneAndRemoveCategory({ _id: categoryId });
    if (!deleted)
      return {
        status: 422,
        message: 'Category not found',
      };
    return {
      status: 200,
      message: 'deleted successfully',
    };
  } catch (error) {
    return error;
  }
};
