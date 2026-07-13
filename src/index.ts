 import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mi App Node.js</title>
        <style>
          body { font-family: Arial; text-align: center; padding: 50px; }
          .container { background: #f4f4f4; padding: 20px; border-radius: 10px; }
          h1 { color: #333; }
          .success { color: #28a745; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Despliegue Automatizado con Docker y GitHub Actions</h1>
          <p class="success">✅ Aplicación funcionando correctamente</p>
          <p>Versión: 1.0.0</p>
          <p>Hora: ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'API funcionando', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});