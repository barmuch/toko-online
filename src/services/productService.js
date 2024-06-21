import prisma from '../config/db.js';

export const getProducts = async () => {
    return await prisma.product.findMany();
  };

export const getProductById = async (id) => {
    return await prisma.product.findUnique({
      where: { id: id },
    });
  };
  
export const createProduct = async (productData) => {
    return await prisma.product.create({
      data: productData,
    });
  };

export const updateProduct = async (id, productData) => {
    return await prisma.product.update({
      where: { id: id },
      data: productData,
    });
  };
  
export const deleteProduct = async (id) => {
    return await prisma.product.delete({
      where: { id: id },
    });
  };