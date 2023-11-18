import ServicioEmail from '../servicio/emailServicio.js'

class ControladorEmail {
    constructor() {
        this.servicio = new ServicioEmail()
    }

    mandarMail = async (req, res) => {
        const mailContext = req.body
        const pacientes = await this.servicio.mandarMail(mailContext)
        res.json(pacientes)
    }
}

export default ControladorEmail