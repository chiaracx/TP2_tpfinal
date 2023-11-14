import express from 'express'
import Controlador from '../controlador/pacienteControlador.js'

class RouterPaciente {
    constructor() {
        this.controlador = new Controlador()
        this.router = express.Router()
    }

    start() {
        this.router.get('/pacientes/:id?', this.controlador.mostrarPaciente)
        this.router.get('/promedioEdad', this.controlador.calcularPromedioEdad)
        this.router.get('/cantidadPacientes', this.controlador.devolverCantidad)
        this.router.post('/', this.controlador.agregarPaciente)
        this.router.put('/:id', this.controlador.actualizarPaciente)
        this.router.delete('/:id', this.controlador.eliminarPaciente)

        return this.router
    }
}

export default RouterPaciente