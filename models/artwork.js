const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for an Artwork document
const artworkSchema = new Schema({
  // Title of the artwork
  title: String,

  // Brief description or details about the artwork
  description: String,

  // Name of the artist who created the artwork
  artist: String,

  // Location of the artwork (e.g., city, state)
  location: String,

  // Type of artwork, restricted to a predefined set of values (enum)
  type: {
    type: String,
    enum: [
      "Mural",
      "Sculpture",
      "Graffiti",
      "Installation",
      "Relief",
      "Mosaic",
      "Fountain",
      "Statue",
      "Land Art",
      "Light Art",
      "Kinetic Art",
      "Street Art",
      "Digital Art",
      "Performance Art",
      "Interactive Art",
      "Environmental Art",
      "Sound Art",
      "Projection Mapping",
      "Temporary Installation",
    ],
  },

  // Optional: Array of image URLs associated with the artwork
  images: [String],

  // Future placeholder for reviews
  // reviews: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Review", // Reference to the Review model
  //   },
  // ],

  // Future placeholder for author field
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User", // Reference to the User model
  // },
});

// Create the Artwork model based on the schema
const Artwork = mongoose.model("Artwork", artworkSchema);

// Attach the enum values for type directly to the model for reuse in the app
Artwork.artworkTypes = artworkSchema.path("type").enumValues;

// Export the Artwork model
module.exports = Artwork;
