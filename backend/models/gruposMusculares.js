import { DataTypes } from "sequelize";
import { cnnDb } from "../data/cnnSequelize.js";

export const GrupoMuscular = cnnDb.define('grupos_musculares', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'nombre': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'imagen': {
        type: DataTypes.STRING,
        allowNull: true
    },
    'descripcion': {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        timestamps: false,
        cnnDb
    })