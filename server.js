// import express from 'express'
// import Router from './router/router.js'
// import config from './config.js'

// import RouterProfesional from './router/profesionalRouter.js'
// import RouterPaciente from './router/pacienteRouter.js'

import express from 'express'
import RouterPaciente from './router/pacienteRouter.js'
import config from './config.js'
import RouterProfesional from './router/profesionalRouter.js'

import CnxMongoDB from './model/DBMongo.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// const router = new Router()
const routerPaciente = new RouterPaciente()
const routerProfesional = new RouterProfesional()

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
// app.use('/api/clinica/', router.start())

app.use('/api/clinica/paciente', routerPaciente.start())
app.use('/api/clinica/profesional', routerProfesional.start())


/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */

if (config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log('Servidor express en error:', error))