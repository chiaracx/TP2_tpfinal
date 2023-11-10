import Servicio from '../servicio/pacienteServicio.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    async mostrarPaciente(req, res) {
        try {
            const pacientes = await this.servicio.mostrarPaciente(id)
            res.send(pacientes)
        }
        catch (error) {
            console.log('error mostrando paciente - controlador' + error);
        }
    }
    async calcularPromedioEdad(req, res) {
        try {
            const promedioEdad = await this.servicio.calcularPromedioEdad()
            res.send(promedioEdad)
        }
        catch (error) {
            console.log('error mostrando promedio - controlador' + error);
        }
    }
    async devolverCantidad(req, res) {
        try {
            const cantidad = await this.servicio.cantidadPacientes()
            res.send(pacientes)
        }
        catch (error) {
            console.log('error mostrando cantidad de pacientes - controlador' + error);
        }
    }

    // async agregarEspecialidad(req, res) {
    //     try {
    //         let especialidad = req.body
    //         let especialidadGuardada = await this.servicio.agregarEspecialidad(especialidad)
    //         res.json(especialidadGuardada)
    //     }
    //     catch (error) {
    //         console.log('error guardando especialidad - controlador' + error);
    //     }
    // }

    async agregarPaciente(req, res) {
        try {
            let paciente = req.body
            let pacienteGuardado = await this.servicio.agregarPaciente(paciente)
            res.json(pacienteGuardado)
        }
        catch (error) {
            console.log('error agregando paciente - controlador' + error);
        }
    }
    async actualizarPaciente(req, res) {
        try {
            const { id } = req.params
            let paciente = req.body
            let pacienteGuardado = await this.servicio.actualizarPaciente(id, paciente)
            res.json(pacienteGuardado)
        }
        catch (error) {
            console.log('error actualizando paciente - controlador' + error);
        }
    }
    async eliminarPaciente(req, res) {
        try {
            let paciente = req.body
            let pacienteEliminado = await this.servicio.eliminarPaciente(paciente)
            res.json(pacienteEliminado)
        }
        catch (error) {
            console.log('error eliminando paciente - controlador' + error);
        }
    }


}

export default Controlador