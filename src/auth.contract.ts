import Joi from "@hapi/joi";

export const loginContract = Joi.object({
  username: Joi.string().required(),
});
