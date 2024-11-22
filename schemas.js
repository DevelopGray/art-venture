const Joi = require("joi");
module.exports.artworkSchema = Joi.object({
  artwork: Joi.object({
    title: Joi.string().required(),
    artist: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    type: Joi.string().required(),
    images: Joi.array()
      .items(
        Joi.string().pattern(
          /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/
        )
      )
      .required(), // Ensures images is an array of valid URLs
  }).required(),
});
