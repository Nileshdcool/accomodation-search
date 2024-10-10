import { HttpStatusCode } from "axios";
import { Response } from "express";

export const sendResponse = (res: Response, statusCode: HttpStatusCode, data: any, message = '') => {
    res.status(statusCode).json({
        status: statusCode < 400 ? 'success' : 'error',
        message,
        data,
    });
};