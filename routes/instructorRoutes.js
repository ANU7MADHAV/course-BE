import express from "express";

import {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseControllers.js";

import upload from "../middlewares/upload-middleware.js";

const instructorRouter = express.Router();

instructorRouter.get("/get-course", getCourses);

instructorRouter.post("/add-courses", upload.single("image"), createCourse);

instructorRouter.put("/update-courses/:id", authenticateAdmin, updateCourse);

instructorRouter.delete("/delete-instructors/:id", deleteCourse);
