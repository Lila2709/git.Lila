const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear servidor HTTP
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Servir el archivo HTML
    fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error interno del servidor');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  } else if (req.url === '/style.css') {
    // Servir el archivo CSS
    fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error interno del servidor');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Página no encontrada');
  }
});

// Iniciar el servidor
server.listen(3000, 'localhost', () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

