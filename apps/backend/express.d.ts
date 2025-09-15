import { namespace } from "../../packages/db/generated/prisma/index";
import Request from "express";

declare namespace Express {
  export interface Request {
    userId?: string;
  }
}
