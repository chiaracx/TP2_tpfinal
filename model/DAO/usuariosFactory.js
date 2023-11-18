import ModelUsuarioMongoDB from "./usuariosModelMongo.js"


class ModelFactoryUsuario {
    static get(tipo) {
        switch (tipo) {
            case 'MONGODB':
                console.log('**** Persistiendo en MongoDB ****')
                return new ModelProfesionalMongoDB()

            default:
                console.log('**** Persistiendo en File System (default) ****')
                return new ModeloProfesionalFile()
        }
    }

}

export default ModelFactoryUsuario
