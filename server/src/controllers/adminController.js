import { Admin } from "../models/adminSchema.js"
import { generateToken } from "../utils/generateToken.js"
import { logger } from "../../logger.js"
import bcrypt from 'bcrypt'

export const registerAdmin = async (req, res) => {
    try {
        const { username, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newAdmin = new Admin({
            username,
            password: hashedPassword
        })

        if (newAdmin) {
            await newAdmin.save()
        }

        logger.info('Admin register successfully', newAdmin.username)
        res.status(201).json(newAdmin)
    } catch (error) {
        logger.error('Error in registerAdmin controller', error.message)
        res.status(500).json('Server error')
    }
}


export const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body
        const admin = await Admin.findOne({ username })

        const isPasswordCorrect = await bcrypt.compare(password, admin?.password || '')

        if (!admin || !isPasswordCorrect) {
            logger.error('Invalid username or password')
            return res.status(400).json({ error: 'Pogresno korisnicko ime ili lozinka'})
        }

        const token = generateToken(admin._id, res)

        logger.info('Admin logged in successfully', admin.username)
        res.status(200).json({
            token,
            username:admin.username
        })
    } catch (error) {
        logger.error('Error in loginAdmin controller', error.message)
        res.status(500).json('Server error')
    }
}

export const logoutAdmin = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge: 0})
        logger.info('Admin logged out successfully')
        res.status(200).json({message: 'Izlogovali ste se'})
    } catch (error) {
        logger.error('Error in logoutAdmin controller', error.message)
        res.status(500).json('Server error')
    }
}