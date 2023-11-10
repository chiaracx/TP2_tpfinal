import ModelPacientesMongoDB from "./pacientesModelMongo.js"

class ModelFactory {
    static get(tipo) {
        switch (tipo) {

            case 'MONGODB':
                console.log('**** Persistiendo en MongoDB ****')
                return new ModelPacientesMongoDB()
                
            default:
                console.log('**** Persistiendo en Memoria (default) ****')
                return new ModelPacientesMongoDB()
        }
    }
}

export default ModelFactory