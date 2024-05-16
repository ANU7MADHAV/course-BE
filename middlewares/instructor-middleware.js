import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authenticateInstructor(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    console.log(err);

    if (err) return res.send("Token not valid or missing").status(403);

    req.instructor = user;
    console.log(req.instructor.role);
    if (
      req.instructor.role !== "instructor" &&
      req.instructor.role !== "admin"
    ) {
      return res.send("not authenticated");
    }

    next();
  });
}

export default authenticateInstructor;
