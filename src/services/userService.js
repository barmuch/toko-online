import prisma from '../config/db.js';

export const getUsers = async () => {
    return await prisma.user.findMany();
};

export const getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
    });
};

export const createUser = async (userData) => {
    return await prisma.user.create({
        data: userData,
    });
};

export const updateUser = async (id, data) => {
    return await prisma.user.update({
        where: { id },
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
        },
    });
};

export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: { id },
    });
};
