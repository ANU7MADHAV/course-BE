import Language from "../models/languageModels.js";

export const languageAdd = async (req, res) => {
  const newLanguage = await Language.create({
    lang: "mal",
    homePage: "ഹോം പേജ്",
    insLink: "അദ്ധ്യാപകൻ",
    courLink: "കോഴ്സ്",
    signinButton: "സൈൻ ഇൻ",
    signupButton: "സൈൻ അപ്പ് ",
    emailPlaceholder: "ഇ-മെയിൽ",
    firstNamePlaceholder: "പേരിന്റെ ആദ്യഭാഗം",
    lastNamePlaceholder: "പേരിന്റെ അവസാന ഭാഗം",
    namePlaceholder: "പേര്",
    passwordPlaceholder: "password",
  });

  if (!newLanguage) {
    res.send("lang is not created");
  }
  newLanguage.save();
  res.send("lang added");
};

export const getLang = async (req, res) => {
  try {
    const { lan } = req.params;
    console.log("language", lan);
    const findLan = await Language.findOne({ lang: lan });
    if (!findLan) {
      res.send("Language doesn't exist");
    }
    res.send(findLan);
  } catch (error) {
    console.log(error);
  }
};
