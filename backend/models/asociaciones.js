import { GrupoMuscular } from "./gruposMusculares.js";
import { Musculo } from "./musculos.js";
import { Rutina } from "./rutinas.js";
import { Ejercicio } from "./ejercicios.js";

Musculo.hasMany(GrupoMuscular, { foreignKey: 'grupoMuscular', onDelete: 'CASCADE' });
GrupoMuscular.belongsTo(Musculo, { foreignKey: 'grupoMuscular' });

Ejercicio.hasMany(Musculo, { foreignKey: 'musculoId', onDelete: 'CASCADE' });
Musculo.belongsTo(Ejercicio, { foreignKey: 'musculoId' });

Ejercicio.hasMany(Rutina, { foreignKey: 'rutinaId', onDelete: 'CASCADE' });
Rutina.belongsTo(Ejercicio, { foreignKey: 'rutinaId' });