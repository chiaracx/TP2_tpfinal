import express from 'express'
import ControladorPaciente from '../controlador/pacienteControlador.js'
import ControladorProfesional from '../controlador/profesionalControlador.js'

class Router {
    constructor() {
        this.controladorPac = new ControladorPaciente()
        this.controladorProf = new ControladorProfesional()
        this.router = express.Router()
    }

    start() {
        this.router.get('/pacientes/:id?', this.controladorPac.mostrarPaciente)
        this.router.get('/pacientes/promedioEdad', this.controladorPac.calcularPromedioEdad)
        this.router.get('/pacientes/cantidadPacientes', this.controladorPac.devolverCantidad)
        this.router.post('/pacientes', this.controladorPac.agregarPaciente)
        this.router.put('/pacientes/:id', this.controladorPac.actualizarPaciente)
        this.router.delete('/pacientes/:id', this.controladorPac.eliminarPaciente)

        this.router.get('/profesionales/:id?', this.controladorProf.mostrarProfesional)
        this.router.get('/profesionales/cantidadProfesionales', this.controladorProf.cantidadProfesional)
        this.router.get('/profesionales/especialidad/:id', this.controladorProf.mostrarEspecialidad)
        this.router.post('/profesionales/', this.controladorProf.agregarProfesional)
        this.router.put('/profesionales/:id', this.controladorProf.actualizarProfesional)
        this.router.delete('/profesionales/:id', this.controladorProf.eliminarProfesional)


        return this.router
    }
}

export default Router