import Joi from "joi";

export function todoValidation(req, res, next) {
  const HeroShema = Joi.object({
    nickname: Joi.string(),
    real_name: Joi.string(),
    origin_description: Joi.string(),
    superpowers: Joi.string(),
    catch_phrase: Joi.string(),
    images: Joi.string(),
  });
  const { error } = HeroShema.validate(req.body);
  if (error) {
    res.status(500).send(error.message);
  } else {
    return next();
  }
}