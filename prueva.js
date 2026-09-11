const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const productos = [ 
    {
        id: 1,
        nombre: "laptop toshiba",
        precio: 1000,
    },
    {
        id: 2,
        nombre: "monitor",
        precio: 2500,
    }
];

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("Hola mundo desde express");
});

// 1. Ver TODOS los productos
app.get("/api/productos", (req, res) => {
    res.json(productos);
});

// 2. Ver un producto según su ID (id1, id2, etc.)
app.get("/api/productos/:id", (req, res) => {
    const id = Number(req.params.id);
    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.json(producto);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});