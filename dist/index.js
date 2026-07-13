"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
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
app.get('/api', (req, res) => {
    res.json({ message: 'API funcionando', timestamp: new Date() });
});
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo :O en http://localhost:${PORT}`);
});
