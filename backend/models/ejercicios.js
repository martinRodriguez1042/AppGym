import { DataTypes } from "sequelize";
import { cnnDb } from "../data/cnnSequelize.js";

export const Ejercicio = cnnDb.define('ejercicios', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'nombre': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'musculoId': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'repeticiones': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'tecnica': {
        type: DataTypes.STRING,
        allowNull: true
    },
    'rutinaId': {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
        cnnDb
    })