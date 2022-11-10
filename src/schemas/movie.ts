import { model, Schema } from 'mongoose';
import { IMovie } from '../types/movie';

const MovieSchema = new Schema({
	title: {
        type: String,
        required: true
    },
	slug: {
        type: String,
        required: true
    },
	image: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
	platforms: [{
        type: Schema.Types.ObjectId,
        ref: "platforms"
    }],
	score: Number,
	reviews: {
        type: Schema.Types.ObjectId,
        ref: "reviews"
    }
}, {
    timestamps: true,
    versionKey: false,
    collection: "movies",
    strict: true
})

export const Movie = model<IMovie>("Movie", MovieSchema)