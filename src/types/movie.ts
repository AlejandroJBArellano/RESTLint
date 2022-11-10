import { IPlatform } from './platform';
import { IReview } from './review';
export interface IMovie{
    _id: string, // ID de la película.
	title: string, // Nombre de la película. Ejemplo: Spiderman 2: El Retorno
	slug: string, // URL de la película basado en el título. Este campo se debe generar en el backend. Ejemplo: spiderman-2-el-retorno
	image: string, // Logo o imagen principal de la película. Ejemplo: spiderman-2.jpg
    director: string, // Nombre del director.
	platforms: IPlatform[], // Array con las plataformas en las que se encuentra la película.
	score: number, // Promedio de las reseñas. Puntuación media calculada en base a las calificaciones de cada una de las reseñas de la película.
    createdAt: Date, // Fecha de creación de la película.
    updatedAt: Date, // Fecha de última actualización de la película.
	reviews: IReview[] // Array que contiene todas las reseñas de la película separadas por plataforma..
}