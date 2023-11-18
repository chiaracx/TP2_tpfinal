import express from 'express'
import ControladorProfesional from '../controlador/profesionalControlador.js'

class RouterProfesional {
    constructor() {
        this.router = express.Router()
        this.controladorProf = new ControladorProfesional()
    }

    start() {
        this.router.get('/:id?', this.controladorProf.mostrarProfesional)
        this.router.get('/cantidadProfesionales', this.controladorProf.cantidadProfesional)
        this.router.get('/especialidad/:id', this.controladorProf.mostrarEspecialidad)
        this.router.post('/', this.controladorProf.agregarProfesional)
        this.router.put('/:id', this.controladorProf.actualizarProfesional)
        this.router.delete('/:id', this.controladorProf.eliminarProfesional)

        return this.router
    }
}

export default RouterProfesional