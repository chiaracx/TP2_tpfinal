import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"

class ModelUsuarioMongoDB {
    mostrarUser = async username => {
        if (!CnxMongoDB.connection) return username ? {} : []

        if (username) {
            const usuario = await CnxMongoDB.db.collection('usuarios').findOne({ _username: new ObjectId(username) })
            return usuario
        }
        else {
            const usuarios = await CnxMongoDB.db.collection('usuarios').find({}).toArray()
            return usuarios
        }
    }

    agregarUsuario = async usuario => {
        if (!CnxMongoDB.connection) return {}

        const usuarioBuscado = await CnxMongoDB.db.collection('usuarios').findOne({ email: usuario.email })
        if (usuarioBuscado && usuarioBuscado.email == usuario.email) {
            console.log('Usuario ya registrado')
            return { error: 'Usuario ya registrado' }
        }
        else {
            await CnxMongoDB.db.collection('usuarios').insertOne(usuario)
            await CnxMongoDB.db.collection('pacientes').insertOne(usuario)
            return usuario
        }
    }

    actualizarUsuario = async (username, usuario) => {
        if (!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('usuarios').updateOne(
            { _username: new ObjectId(username) },
            { $set: usuario }
        )

        const usuarioActualizado = await this.mostrarUser(username)
        return usuarioActualizado
    }

    eliminarUsuario = async username => {
        if (!CnxMongoDB.connection) return {}

        const usuarioEliminado = await this.mostrarUser(username)
        await CnxMongoDB.db.collection('usuarios').deleteOne({ _username: new ObjectId(username) })
        return usuarioEliminado
    }
}

export default ModelUsuarioMongoDB