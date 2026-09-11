const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const productos =
[ 
    {
        id:1,
        nombre: "laptop toshiba",
        precio: 1000,
    },
    {
        id:2,
        nombre: "monitor",
        precio: 2500,
    }
];
app.get("/", (req, res) => {
    res.send("Hola mundo desde express");
});
app.get("/api/productos", (req, res) => {
    res.json(productos);
});
/*
app.get("/api/productos", (req, res) => {
    const id = Number (req.params.id);
    const producto = productos.find (
        producto => producto.id === id  

    );
    if (!productos) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }
    res.json(producto);
});*/
app.get ("/api/productos/:id", (req, res) => {
    const id = Number(req.params.id);
    const producto = productos.find(
        producto => producto.id === id  
    );
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

/*app.get("/apiproducto", (req, res) => { //res ->request, res -> response la informacion que llefa del usuario
    //res ->response la informacion que enviamos al usuario 
    res.json({
       estado: "exitoso",
       producto: {
        nombre: "Juan",
        apellido: "Perez"
       }
    });
});*/
/*app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});*/


//hacer de cliende con id, nombre correo, telefono y direccion 