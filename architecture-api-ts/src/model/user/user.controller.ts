import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../../middleware/asyncHandler';

export const login = asyncHandler()