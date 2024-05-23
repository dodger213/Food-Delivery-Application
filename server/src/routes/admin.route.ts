import { Router } from "express";
import * as admin from "../controllers/admin.controller";
import { AdminMiddleware, AuthMiddleware } from "../middleware";

export const AdminRoute = Router();

AdminRoute.get('/get-users', admin.GetAllCustomersList)
AdminRoute.get('/get-products', admin.GetAllProductsList)
AdminRoute.get('/verifyAdminApi', AuthMiddleware, AdminMiddleware, admin.VerifyAdmin)