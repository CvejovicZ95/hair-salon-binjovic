import express from 'express'
import { registerAdmin, loginAdmin, logoutAdmin } from '../controllers/adminController.js'

export const adminRouter = express.Router()

adminRouter.post('/registerAdmin',registerAdmin)
adminRouter.post('/loginAdmin', loginAdmin)
adminRouter.post('/logoutAdmin',logoutAdmin)