import { Request, Response, NextFunction } from 'express';
import { sendResponse } from 'utils/response';

export const errorHandler = (err: { stack: any; statusCode: any; message: any; }, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  sendResponse(res, err.statusCode || 500, null, err.message || 'Internal Server Error');
};