import fs from 'fs'

class ModelUsuarioFile {
    constructor() {
        this.nombreArchivo = 'usuarios.json'
    }

    leerArchivo = async nombre => {
        let usuarios = []
        try {
            usuarios = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch { }
        return usuarios
    }

    escribirArchivo = async (nombre, usuarios) => {
        await fs.promises.writeFile(nombre, JSON.stringify(usuarios, null, '\t'))
    }

    mostrarUser = async id => {
        console.log(id)
        try {
            const usuarios = await this.leerArchivo(this.nombreArchivo)
            if (id) {
                const usuario = usuarios.find(usuario => usuario.id === id)
                return usuario || {}
            }
            else {
                return usuarios
            }
        }
        catch {
            return id ? {} : []
        }
    }

    agregarUsuario = async usuario => {
        const usuarios = await this.leerArchivo(this.nombreArchivo)

        usuario.id = String(parseInt(usuarios[usuarios.length - 1]?.id || 0) + 1)
        usuario.edad = Number(usuario.edad)
        usuarios.push(usuario)
        await this.escribirArchivo(this.nombreArchivo, usuarios)

        return usuario
    }

    actualizarUsuario = async (id, usuario) => {
        usuario.id = id

        const usuarios = await this.leerArchivo(this.nombreArchivo)
        const index = usuarios.findIndex(usuario => usuario.id === id)
        if (index != -1) {
            const usuarioAnt = usuarios[index]
            const usuarioNuevo = { ...usuarioAnt, ...usuario }
            usuarios.splice(index, 1, usuarioNuevo)
            await this.escribirArchivo(this.nombreArchivo, usuarios)
            return usuarioNuevo
        }
        else {
            usuarios.push(usuario)
            await this.escribirArchivo(this.nombreArchivo, usuarios)
            return usuario
        }
    }

    eliminarUsuario = async id => {
        let usuario = {}
        const usuarios = await this.leerArchivo(this.nombreArchivo)
        const index = usuarios.findIndex(usuario => usuario.id === id)
        if (index != -1) {
            usuario = usuarios.splice(index, 1)[0]
            await this.escribirArchivo(this.nombreArchivo, usuarios)
        }
        return usuario
    }

}

export default ModelUsuarioFile