import { Request, Response } from "express";
import { Movie } from '../schemas/movie';
import { Platform } from '../schemas/platform';
import { Review } from '../schemas/review';
export const deleteRoutes = {
    deleteMovie: async (req: Request, res: Response) => {
        await Movie.findByIdAndDelete(req.params._id)
        res.status(200).json({
            message: "Movie deleted!"
        })
    },
    deleteReview: async (req: Request, res: Response) => {
        await Review.findByIdAndDelete(req.params._id)
        res.status(200).json({
            message: "Review deleted!"
        })
    },
    deletePlatform:async (req: Request, res: Response) => {
        await Platform.findByIdAndDelete(req.params._id)
        res.status(200).json({
            message: "Movie deleted!"
        })
    }

}