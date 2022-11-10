import { Request, Response } from "express";
import { Movie } from '../schemas/movie';
import { Platform } from '../schemas/platform';
import { Review } from '../schemas/review';
import { existingProperties } from "../utils/exitingProperties";

export const patchRoutes = {
    changePropertiesOfMovie: async (req: Request, res: Response) => {
        const {_id, title, slug, image, director} = req.body;
        const propertiesToEdit = existingProperties({title, slug, image, director})
        const movie = await Movie.findById(_id)
        movie?.set(propertiesToEdit)
        await movie?.save();
        res.status(200).json({
            message: "Movie updated!"
        })
    },
    changePropertiesOfPlatform: async (req: Request, res: Response) => {
        const {_id, icon, title} = req.body;
        const propertiesToEdit = existingProperties({icon, title});
        const platform = await Platform.findById(_id);
        platform?.set(propertiesToEdit)
        await platform?.save();
        res.status(200).json({
            message: "Platform updated!"
        })
    }, 
    changePropertiesOfReview:async (req: Request, res: Response) => {
        const {_id, movie, platform, author, body, score} = req.body;
        const propertiesToEdit = existingProperties({movie, platform, author, body, score});
        const review = await Review.findById(_id);
        review?.set(propertiesToEdit)
        await review?.save();
        res.status(200).json({
            message: "Review updated!"
        })
    }
}