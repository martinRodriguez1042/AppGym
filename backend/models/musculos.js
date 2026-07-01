import { DataTypes } from "sequelize";
import { cnnDb } from "../data/cnnSequelize.js";

export const Musculo = cnnDb.define('musculos', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    'nombre': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'imagen': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'grupoMuscular': {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
        cnnDb
    })