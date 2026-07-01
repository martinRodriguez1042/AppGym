import express from 'express';
import { cnnDb } from './data/cnnSequelize.js';
import { GrupoMuscular, Musculo, Rutina, Ejercicio } from './models/index.js';

const app = express();
app.use(express.json());

app.listen(3000, async() => {
    await cnnDb.sync();
    console.log('Base de datos sincronizada');
    console.log('Servidor escuchando en http://localhost:3000');
});