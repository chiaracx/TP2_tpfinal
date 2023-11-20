import config from "../config.js"
import ModelFactoryUsuario from "../model/DAO/usuariosFactory.js"
import { validar } from "./validaciones/usuariosValidaciones.js"

class ServicioUser {
    constructor() {
        this.model = ModelFactoryUsuario.get(config.MODO_PERSISTENCIA)
    }

    mostrarUser = async username => {
        const usuario = await this.model.mostrarUser(username)
        return usuario
    }

    cantidadUser = async () => {
        const cantidad = await this.model.mostrarUser()
        return cantidad.length
    }

    loginUser  = async email => {
        const usuario = await this.model.loginUser(email)
        return usuario
    }

    agregarUsuario = async usuario => {
        const res = validar(usuario)
        if (res.result) {
            const usuarioAgregado = await this.model.agregarUsuario(usuario)
            return usuarioAgregado
        } else {
            console.log(res.error)
            throw res.error
        }
    }

    actualizarUsuario = async (username, usuario) => {
        const usuarioActualizado = await this.model.actualizarUsuario(username, usuario)
        return usuarioActualizado
    }

    eliminarUsuario = async username => {
        const usuarioEliminado = await this.model.eliminarUsuario(username)
        return usuarioEliminado
    }
}

export default ServicioUser