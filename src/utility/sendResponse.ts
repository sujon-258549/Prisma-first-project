import { Request, Response } from "express";

interface TMetaData {
  page: number;
  limit: number;
  total?: number;
}

export const sendResponse = <T>(
  res: Response,
  TResponse: {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T | undefined | null;
    meta?: TMetaData;
  }
) => {
  res.status(TResponse.statusCode).json({
    success: TResponse.success,
    message: TResponse.message,
    data: TResponse.data,
    meta: TResponse.meta,
  });
};
