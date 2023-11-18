import express from 'express'
import ControladorEmail from '../controlador/emailControlador.js'

class RouterEmail {
    constructor() {
        this.router = express.Router()
        this.controladorMail = new ControladorEmail()      
    }

    start() {
        this.router.post('/', this.controladorMail.mandarMail)

        return this.router
    }
}

export default RouterEmail