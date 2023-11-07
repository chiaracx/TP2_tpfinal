import Controlador from '../controlador/controlador.js'

class Router {
    constructor() {
        this.controlador = new Controlador()
        this.router = express.Router()
    }

    start() {
        this.router.get('/:id?', this.controlador.mostrarPaciente)
        this.router.get('/promedioEdad', this.controlador.calcularPromedioEdad)
        this.router.get('/cantidadPacientes', this.controlador.devolverCantidad)

        this.router.post('/altaPaciente', this.controlador.agregarPaciente)
        this.router.post('/especialidad', this.controlador.agregarEspecialidad)

        this.router.put('/:id?', this.controlador.actualizarPaciente)

        this.router.delete('/bajaPaciente/:id?', this.controlador.eliminarPaciente)


        return this.router
    }

}

export default Router