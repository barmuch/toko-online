import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService.js';
import { sendResponse } from '../utils/response.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getUsers();
        sendResponse(res, 200, 'Users fetched successfully', users);
    } catch (error) {
        next(error);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        sendResponse(res, 200, 'User fetched successfully', user);
    } catch (error) {
        next(error);
    }
};

export const addUser = async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        sendResponse(res, 201, 'User created successfully', user);
    } catch (error) {
        next(error);
    }
};

export const editUser = async (req, res, next) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        sendResponse(res, 200, 'User updated successfully', user);
    } catch (error) {
        next(error);
    }
};

export const removeUser = async (req, res, next) => {
    try {
        await deleteUser(req.params.id);
        sendResponse(res, 200, 'User deleted successfully');
    } catch (error) {
        next(error);
    }
};
