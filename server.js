const http = require("http");

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    const estudiante = {
        nombre : "Juan",
        apellido : "Perez",
        edad : 20,
        curso : "Node.js"
    }
    res.end(JSON.stringify(estudiante));
});

servidor.listen(3000, () => {
    console.log("servidor ejecutandose en http://localhost:3000");
});