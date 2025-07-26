import { Router } from 'express'
import { sender } from '../controllers/index.js'
const router = Router()

router.get('/', (req, res) => res.render('p'))

router.post('/ver', sender)

export default router