import { Request, Response } from "express";
import { Movie } from '../schemas/movie';
import { Platform } from '../schemas/platform';
import { Review } from '../schemas/review';
import { messageFindOne, messageStatus } from '../utils/message';

export const getRoutes = {
    default:async (req: Request, res: Response) => {
        res.send(`<h1>Hello World!</h1>`)
    },
    getMovies: async (req: Request, res: Response) => {
        const movies = await Movie.find(req.query)
        res.status(200).json({
            data: movies, message: messageStatus(movies.length)})
    },
    getReviews: async (req: Request, res: Response) => {
        const reviews = await Review.find(req.query) 
        res.status(200).json({
            data: reviews, message: messageStatus(reviews.length)})
    },
    getPlatforms: async (req: Request, res: Response) => {
        const platforms = await Platform.find(req.query)
        res.status(200).json({data: platforms, message: messageStatus(platforms.length)})
    },
    getPlatformByQuery: async (req: Request, res: Response) => {
        const platform = await Platform.findOne(req.query);
        res.status(200).json({data: platform, message: messageFindOne(platform?._id)})
    },
    getReviewByQuery: async (req: Request, res: Response) => {
        const review = await Review.findOne(req.query);
        res.status(200).json({data: review, message: messageFindOne(review?._id)})
    },
    getMovieByQuery: async (req: Request, res: Response) => {
        const movie = await Movie.findOne(req.query);
        res.status(200).json({data: movie, message: messageFindOne(movie?._id)})
    }
}