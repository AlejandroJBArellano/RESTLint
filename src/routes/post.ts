import { Request, Response } from "express";
import { Model } from "mongoose";
import { Movie } from "../schemas/movie";
import { Platform } from '../schemas/platform';
import { Review } from '../schemas/review';

export const postRoutes = {
    createMovie: async (req: Request, res: Response) => {
        const {title, slug, image, director, platforms} = req.body
        if(Array.isArray(platforms)){
            for await (const platform of platforms) {
                const p = await Platform.findById(platform._id)
                if(!p){
                    const newPlatform = new Platform({
                        icon: platform?.icon,
                        title: platform?.title
                    })
                    newPlatform.save()
                }
            }
        }
        const newMovie = new Movie({
            title, slug, image, director, platforms
        })
        newMovie.save();
        res.status(200).json({
            data: newMovie,
            mesage: "Movie created!"
        })
    },
    createReview: async (req: Request, res: Response) => {
        const {movie, platform, author, body, score} = req.body;
        const newReview = new Review({
            movie, platform, author, body, score
        });
        await newReview.save();
        await Model.updateOne(
            { _id: movie },
            { $push: {reviews: newReview._id}}
        )
        res.status(200).json({
            data: newReview,
            message: "Review created!"
        })
    },
    createPlatform: async (req: Request, res: Response) => {
        const {icon, title} = req.body;
        const newPlatform = new Platform({
            icon, title
        });
        await newPlatform.save();
        res.json({
            data: newPlatform,
            message: "Plaform created!"
        })
    }
}