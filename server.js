import express from 'express'
import Router from './router/router.js'
import config from './config.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const router = new Router()


/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use('/api/clinica/', router.start())

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */

if (config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log('Servidor express en error:', error))