import Servicio from '../servicio/pacienteServicio.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    mostrarPaciente = async (req, res) => {
        const { id } = req.params
        const pacientes = await this.servicio.mostrarPaciente(id)
        res.json(pacientes)

        // try {
        //     const pacientes = await this.servicio.mostrarPaciente(id)
        //     res.send(pacientes)
        // }
        // catch (error) {
        //     console.log('error mostrando paciente - controlador' + error);
        // }
    }

    calcularPromedioEdad = async (req, res) => {

        const promedioEdad = await this.servicio.calcularPromedioEdad()
        res.json({ promedioEdad })

        // try {
        //     const promedioEdad = await this.servicio.calcularPromedioEdad()
        //     res.send(promedioEdad)
        // }
        // catch (error) {
        //     console.log('error mostrando promedio - controlador' + error);
        // }
    }
    devolverCantidad = async (req, res) => {
        const cantidad = await this.servicio.devolverCantidad()
        res.json({ cantidad })


        // try {
        //     const cantidad = await this.servicio.cantidadPacientes()
        //     res.send(pacientes)
        // }
        // catch (error) {
        //     console.log('error mostrando cantidad de pacientes - controlador' + error);
        // }
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

    agregarPaciente = async (req, res) => {

        const paciente = req.body
        const pacienteGuardado = await this.servicio.agregarPaciente(paciente)
        res.json(pacienteGuardado)

        // try {
        //     let paciente = req.body
        //     let pacienteGuardado = await this.servicio.agregarPaciente(paciente)
        //     res.json(pacienteGuardado)
        // }
        // catch (error) {
        //     console.log('error agregando paciente - controlador' + error);
        // }
    }
    actualizarPaciente = async (req, res) => {
        const { id } = req.params
        const paciente = req.body
        const pacienteGuardado = await this.servicio.actualizarPaciente(id, paciente)
        res.json(pacienteGuardado)

        // try {
        //     const { id } = req.params
        //     let paciente = req.body
        //     let pacienteGuardado = await this.servicio.actualizarPaciente(id, paciente)
        //     res.json(pacienteGuardado)
        // }
        // catch (error) {
        //     console.log('error actualizando paciente - controlador' + error);
        // }
    }
    eliminarPaciente = async (req, res) => {
        const { id } = req.params
        const pacienteEliminado = await this.servicio.eliminarPaciente(id)
        res.json(pacienteEliminado)

        // try {
        //     let paciente = req.body
        //     let pacienteEliminado = await this.servicio.eliminarPaciente(paciente)
        //     res.json(pacienteEliminado)
        // }
        // catch (error) {
        //     console.log('error eliminando paciente - controlador' + error);
        // }
    }


}

export default Controlador