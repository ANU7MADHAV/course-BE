import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
  lang: {
    type: String,
  },
  insLink: {
    type: String,
  },
  homePage: {
    type: String,
  },
  courLink: {
    type: String,
  },
  signinButton: {
    type: String,
  },
  signupButton: {
    type: String,
  },
  emailPlaceholder: {
    type: String,
  },
  firstNamePlaceholder: {
    type: String,
  },
  lastNamePlaceholder: {
    type: String,
  },
  namePlaceholder: {
    type: String,
  },
  passwordPlaceholder: {
    type: String,
  },
});

const Language = mongoose.model("Language", languageSchema);

export default Language;
