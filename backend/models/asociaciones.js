import { GrupoMuscular } from "./gruposMusculares.js";
import { Musculo } from "./musculos.js";

Musculo.hasMany(GrupoMuscular, { foreignKey: 'grupoMuscular', onDelete: 'CASCADE' });
GrupoMuscular.belongsTo(Musculo, { foreignKey: 'grupoMuscular' });