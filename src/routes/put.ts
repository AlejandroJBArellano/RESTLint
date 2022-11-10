import { Request, Response } from "express";
import { Movie } from '../schemas/movie';
import { Platform } from '../schemas/platform';
import { Review } from '../schemas/review';

export const putRoutes = {
    editReview:async (req: Request, res: Response) => {
        const { _id, movie, platform, author, body, number } = req.body
        const review = {
            movie, platform, author, body, number
        }
        await Review.updateOne(
            {_id},
            review
        )
        res.status(200).json({
            message: "updated!"
        })
    },
    editPlatform: async (req: Request, res: Response) => {
        const {_id, icon, title} = req.body;
        const platform = {icon, title}
        await Platform.updateOne(
            {_id},
            platform
        )
        res.status(200).json({
            message: "updated!"
        })
    },
    editMovie: async (req:Request, res: Response) => {
        const {_id, title, slug, image, director} = req.body;
        const movie = {title, slug, image, director};

        await Movie.updateOne(
            {_id},
            movie
        )

        res.status(200).json({
            message: "updated!"
        })
    }
}