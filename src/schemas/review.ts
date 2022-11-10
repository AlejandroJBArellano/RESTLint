import { model, Schema } from 'mongoose';
import { IReview } from '../types/review';
const ReviewSchema = new Schema({
    movie: String,
    platform: String,
    author: String, 
	body: String,
	score: Number,
}, {
    timestamps: true,
    versionKey: false,
    collection: "reviews",
    strict: true
})

export const Review = model<IReview>("Review", ReviewSchema)