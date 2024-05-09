const http = require('http');
const WebSocket = require('ws');

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    // Manejar solicitudes HTTP
});

// Crear servidor de WebSocket
const wss = new WebSocket.Server({ server });

// Manejar conexiones de WebSocket
wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Manejar mensajes recibidos
    ws.on('message', (message) => {
        // Reenviar el mensaje a todos los clientes conectados
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Manejar cierre de conexión
    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

// Escuchar en un puerto
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
