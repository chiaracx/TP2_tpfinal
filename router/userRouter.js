import express from 'express'
import ControladorUser from '../controlador/userControlador.js'

class RouterUser {
    constructor() {
        this.router = express.Router()
        this.controladorUser = new ControladorUser()      
    }

    start() {
        this.router.get('/user/:username?', this.controladorUser.mostrarUser)
        this.router.get('/cantidadUsers', this.controladorUser.cantidadUser)
        this.router.post('/login', this.controladorUser.loginUser)
        this.router.post('/', this.controladorUser.agregarUsuario)
        this.router.put('/:username', this.controladorUser.actualizarUsuario)
        this.router.delete('/:username', this.controladorUser.eliminarUsuario)

        return this.router
    }
}

export default RouterUser