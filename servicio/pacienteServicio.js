import Model from '../model/DAO/modelMongo.js'

class Servicio {
    constructor() {
        this.model = new Model()
    }

    mostrarPaciente = async id => {
        const paciente = await this.model.mostrarPaciente(id)
        return paciente
    }

    calcularPromedioEdad = async () => {

    }

    devolverCantidad = async () => {
        const cantidad = await this.model.devolverCantidad()
        return cantidad.length
    }

    // agregarEspecialidad = async () => {    }

    agregarPaciente = async paciente => {
        const pacienteAgregado = await this.model.agregarPaciente(paciente)
        return pacienteAgregado
    }

    actualizarPaciente = async (id, paciente) => {
        const pacienteActualizado = await this.model.actualizarPaciente(id, paciente)
        return pacienteActualizado
    }

    eliminarPaciente = async id => {
        const pacienteEliminado = await this.model.eliminarPaciente(id)
        return pacienteEliminado
    }
}

export default Servicio
