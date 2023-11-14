import ServicioProfesional from "../servicio/profesionalServicio.js"


class ControladorProfesional {
    constructor() {
        this.servicioProf = new ServicioProfesional()
    }

    mostrarProfesional = async (req, res) => {
        const { id } = req.params
        const profesionales = await this.servicioProf.mostrarProfesional(id)
        res.json(profesionales)
    }

    cantidadProfesional = async (req, res) => {
        const cantidad = await this.servicioProf.cantidadProfesional()
        res.json({ cantidad })
    }

    agregarProfesional = async (req, res) => {
        const profesional = req.body
        const profesionalGuardado = await this.servicioProf.agregarProfesional(profesional)
        res.json(profesionalGuardado)
    }

    actualizarProfesional = async (req, res) => {
        const { id } = req.params
        const profesional = req.body
        const profesionalGuardado = await this.servicioProf.actualizarProfesional(id, profesional)
        res.json(profesionalGuardado)
    }

    eliminarProfesional = async (req, res) => {
        const { id } = req.params
        const profesionalEliminado = await this.servicioProf.eliminarProfesional(id)
        res.json(profesionalEliminado)
    }
}

export default ControladorProfesional