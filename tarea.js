const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const clientes = [
    {
        id: 1,
        nombre: "Carlos Mendoza",
        correo: "carlos.mendoza@email.com",
        telefono: "70012345",
        direccion: "Av. alemana"
    },
    {
        id: 2,
        nombre: "Mariana Rojas",
        correo: "mariana.rojas@email.com",
        telefono: "78945612",
        direccion: "Av. Beni"
    },
    {
        id: 3,
        nombre: "Lucas Fernández",
        correo: "lucas.f@email.com",
        telefono: "65432198",
        direccion: "Barrio Equipetrol"
    }
];
app.get("/", (req, res) => {
    res.send("hola mundo xd");
});

// Obtiene todos los clientes 
app.get("/api/clientes", (req, res) => {
    res.json(clientes);
});
app.get("/api/clientes/:id", (req, res) => {
    const id = Number(req.params.id);
    const cliente = clientes.find(c => c.id === id);

    if (!cliente) {
        return res.status(404).json({
            mensaje: "Cliente no encontrado"
        });
    }

    res.json(cliente);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});