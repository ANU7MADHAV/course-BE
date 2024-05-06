import { cloudinaryInstance } from "../config/cloudinary";
import Course from "../models/courseModels";
import Instructor from "../models/instructorModel";

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.send(courses).status(200);
};

export const createCourse = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }
    cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
      if (err) {
        console.log(err, "error");
        return res.status(500).json({
          success: false,
          message: "Error",
        });
      }
      const imageUrl = result.url;
      const body = req.body;
      console.log(body, "body");

      const { title, description, price, instructorEmail } = body;

      const findInstructor = await Instructor.find({ email: instructorEmail });

      if (!findInstructor) {
        return res.send("please add instructor first").status(201);
      }

      const createCourse = new Course({
        title,
        description,
        price,
        instructor: findInstructor._id,
        image: imageUrl,
      });

      const newCourseCreated = await createCourse.save();

      if (!newCourseCreated) {
        return res.send("course is not created");
      }
      return res.send(newCourseCreated);
    });
  } catch (error) {
    console.log("something went wrong", error);
    res.send("failed to create course").status(201);
  }
};

export const updateCourse = async (req, res) => {
  const id = req.params.id;

  const updatedCourse = await Course.findOneAndUpdate(
    { _id: id },
    { description, price, instructor },
    {
      new: true,
    }
  );

  if (!updatedCourse) {
    return res.send("Course is not updated");
  }
  console.log(updatedCourse);
  return res.send(updatedCourse);
};

export const deleteCourse = async (req, res) => {
  const id = req.params.id;
  const deleteId = await Course.deleteOne({ _id: id });
  if (!deleteId) {
    return res.send("not deleted");
  }
  res.send("deleted course");
};
