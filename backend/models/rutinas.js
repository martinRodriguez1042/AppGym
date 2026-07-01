import { DataTypes } from "sequelize";
import { cnnDb } from "../data/cnnSequelize.js";

export const Rutina = cnnDb.define('rutinas', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'nombre': {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
        cnnDb
    })