import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { join, login, logout } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search_, search);
globalRouter.get(routes.join_, join);
globalRouter.get(routes.login, login );
globalRouter.get(routes.logout, logout);

export default globalRouter;