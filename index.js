import express from 'express'
import body_parser from 'body-parser'
import rutaAnalisis from './src/routes/analisis.routes.js'
import rutaVariedades from './src/routes/variedades.routes.js'

const servidor = express()
const port = 3333

// Configuración del servidor
servidor.use(body_parser.json()) 
servidor.use(body_parser.urlencoded({ extended: false }))

// Rutas
servidor.use(rutaAnalisis)
servidor.use(rutaVariedades)

// Arranque del servidor
servidor.listen(port, () => {
    console.log("Está funcionando!")
})