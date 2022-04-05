import Joi from "joi";

export function todoValidation(req, res, next) {
  const HeroShema = Joi.object({
    nickname: Joi.string().allow(null, ''),
    real_name: Joi.string().allow(null, ''),
    origin_description: Joi.string().allow(null, ''),
    superpowers: Joi.string().allow(null, ''),
    catch_phrase: Joi.string().allow(null, ''),
    images: Joi.string().allow(null, ''),
  });
  const { error } = HeroShema.validate(req.body);
  if (error) {
    res.status(500).send(error.message);
  } else {
    return next();
  }
}