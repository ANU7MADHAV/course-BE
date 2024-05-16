import express from "express";
import { getLang, languageAdd } from "../controllers/languageController.js";
const lanRouter = express.Router();

lanRouter.get("/lang/add", languageAdd);
lanRouter.get("/get-lan/:lan", getLang);

export default lanRouter;
