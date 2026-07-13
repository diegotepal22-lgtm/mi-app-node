import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname + '/..'));

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mi App Node.js</title>
        <style>
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 700px;
            animation: fadeIn 0.5s ease-in;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          h1 {
            color: #333;
            font-size: 2.5em;
            margin-bottom: 10px;
          }
          .success {
            color: #28a745;
            font-size: 1.2em;
            font-weight: bold;
            background: #d4edda;
            padding: 10px 20px;
            border-radius: 10px;
            display: inline-block;
          }
          .version {
            background: #6c757d;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            display: inline-block;
          }
          .timestamp {
            color: #666;
            font-size: 0.9em;
            margin-top: 15px;
          }
          .badge {
            background: #007bff;
            color: white;
            padding: 3px 10px;
            border-radius: 10px;
            font-size: 0.8em;
          }
          .image-container {
            margin: 20px 0;
          }
          .image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            max-height: 300px;
          }
          .footer {
            margin-top: 20px;
            color: #999;
            font-size: 0.8em;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 ¡Despliegue Automatizado Exitoso!</h1>
          <p class="success">✅ La aplicación se actualizó automáticamente</p>
          
          <div class="image-container">
            <img src="/waifu_amazon.png" alt="Waifu Amazon" />
          </div>
          
          <p>
            <span class="version">Versión 2.0.0</span>
            <span class="badge">CI/CD</span>
          </p>
          <p class="timestamp">🕐 Actualizado: ${new Date().toLocaleString()}</p>
          <p class="footer">
            Docker + GitHub Actions + AWS
          </p>
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