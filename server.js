import express from 'express'
import RouterNotas from './router/pacienteRouter.js'
import config from './config.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())

const router = new RouterNotas()

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use('/api/clinica', router.start())

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = config.PORT

const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log('Servidor express en error:', error))