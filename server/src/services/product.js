import {
  insertProduct,
  findOneAndUpdateProduct,
  findOneAndRemoveProduct,
  getOneProduct,
  getAllProducts,
} from '../repository/product';

export const createProduct = async (data) => {
  return await insertProduct(data);
};

export const getProducts = async (query) => {
  try {
    return await getAllProducts(query);
  } catch (error) {
    return error;
  }
};

export const getProductByID = async (id) => {
  try {
    const product = await getOneProduct({ _id: id });
    if (!product)
      return {
        status: 404,
        message: 'Product not found',
      };
    return product;
  } catch (error) {
    return error;
  }
};

export const updateProductdetails = async (productId, productDetails) => {
  try {
    const updatedProduct = await findOneAndUpdateProduct(
      { _id: productId },
      productDetails
    );
    if (!updatedProduct)
      return {
        status: 404,
        message: 'Product not found',
      };
    return updatedProduct;
  } catch (error) {
    return error;
  }
};

export const deleteById = async (productId) => {
  try {
    const deleted = await findOneAndRemoveProduct({ _id: productId });
    if (!deleted)
      return {
        status: 422,
        message: 'Product not found',
      };
    return {
      status: 200,
      message: 'deleted successfully',
    };
  } catch (error) {
    return error;
  }
};
