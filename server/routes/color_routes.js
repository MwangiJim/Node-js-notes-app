import express from 'express'
import { addColor, getColor, updateColor } from '../controllers/ColorController.js'

const router = express.Router()

router.get('/fetchColor',getColor);

router.post('/addColor',addColor);

router.put('/updateColor',updateColor);

export default router