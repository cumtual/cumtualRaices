import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();

// Establecer la base de las rutas
const base = '/';

// Servir los archivos estáticos generados por Astro (el frontend)
app.use(base, express.static('dist/client/'));

// Manejar el SSR con Astro
app.use(ssrHandler);

// Iniciar el servidor en el puerto deseado
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SSR server is running on http://localhost:${port}`);
});
