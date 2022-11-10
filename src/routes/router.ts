import { Router } from "express";
import { deleteRoutes } from './delete';
import { getRoutes } from './get';
import { patchRoutes } from './patch';
import { postRoutes } from './post';
import { putRoutes } from './put';

const router = Router();

router.get("/", getRoutes.default)
router.get("/movie", getRoutes.getMovieByQuery);
router.get("/review", getRoutes.getReviewByQuery);
router.get("/platform", getRoutes.getPlatformByQuery);
router.get("/movies", getRoutes.getMovies);
router.get("/reviews", getRoutes.getReviews);
router.get("/platforms", getRoutes.getPlatforms);

router.post("/movie", postRoutes.createMovie);
router.post("/review", postRoutes.createReview);
router.post("/platform", postRoutes.createPlatform);

router.put("/movie", putRoutes.editMovie);
router.put("/review", putRoutes.editReview);
router.put("/platform", putRoutes.editPlatform);

router.patch("/movie", patchRoutes.changePropertiesOfMovie);
router.patch("/review", patchRoutes.changePropertiesOfReview);
router.patch("/platform", patchRoutes.changePropertiesOfPlatform);

router.delete("/movie/:_id", deleteRoutes.deleteMovie);
router.delete("/review/:_id", deleteRoutes.deleteReview);
router.delete("/platform/:_id", deleteRoutes.deletePlatform);

export default router;