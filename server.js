import express from 'express'
import router from './router/router.js'
import PORT from 'config.js'

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
const server = app.listen(PORT, 
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error) )