import express from 'express'
import ControladorUser from '../controlador/userControlador.js'

class RouterUser {
    constructor() {
        this.router = express.Router()
        this.controladorUser = new ControladorUser()      
    }

    start() {
        this.router.get('/user/:username', this.controladorUser)
        this.router.get('/cantidadUsers', this.controladorUser.cantidadUsuarios)
        this.router.post('/', this.controladorUser)
        this.router.put('/:username', this.controladorPac.actualizarPaciente)
        this.router.delete('/:username', this.controladorPac.eliminarPaciente)

        return this.router
    }
}

export default RouterUser