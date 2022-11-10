import { model, Schema } from "mongoose";
import { IPlatform } from '../types/platform';

const PlatformSchema = new Schema({
    icon: String, // Icono de la plataforma. Ejemplo: netflix-icon.jpg
    title: String, 
}, {
    timestamps: true,
    collection: "platforms",
    versionKey: false,
    strict: true
})

export const Platform = model<IPlatform>("Platform", PlatformSchema)