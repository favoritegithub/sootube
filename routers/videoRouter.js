import express from 'express';
import routes from "../routes";

const videoRouter = express.Router();

globalRouter.get(routes.upload, (req, res) => res.send("Upload"));
globalRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
globalRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
globalRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Videos"));

export default videoRouter;