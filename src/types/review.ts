export interface IReview {
    _id?: string, // ID de la reseña.
	movie: string, // ID de la película sobre la que se va a reseñar.
    platform: string, // ID de la plataforma sobre la que se va a reseñar.
    author: string, // Nombre del autor o usuario que está creando la reseña.
	body: string, // Texto de la reseña.
	score: number, // Calificación 0 a 5 de la reseña.
	createdAt?: Date, // Fecha de creación de la reseña.
    updatedAt?: Date,
}