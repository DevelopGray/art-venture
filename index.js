const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const { artworkSchema } = require("./schemas.js");
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const Artwork = require("./models/artwork"); // Import the Artwork model
const artworkTypes = Artwork.artworkTypes; // Extract the enum types for artwork

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/art-venture");

const db = mongoose.connection;
// Log an error message if the database connection fails
db.on("error", console.error.bind(console, "connection error:"));
// Log a success message once the database is connected
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

// Set ejsMate and EJS as the view engine and configure the views directory
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to support HTTP method override for PUT and DELETE requests
app.use(methodOverride("_method"));

const ValidateArtwork = (req, res, next) => {
  const { error } = artworkSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// Route: Home page
app.get("/", (req, res) => {
  res.render("home");
});

// Route: Display all artworks
app.get(
  "/artworks",
  catchAsync(async (req, res) => {
    const artwork = await Artwork.find({}); // Fetch all artworks from the database
    res.render("artworks/index", { artwork }); // Pass the artworks to the index view
  })
);

// Route: Display the form to add a new artwork
app.get("/artworks/new", (req, res) => {
  res.render("artworks/new", { artworkTypes }); // Pass the artworkTypes enum for the dropdown
});

// Route: Handle the creation of a new artwork
app.post(
  "/artworks",
  ValidateArtwork,
  catchAsync(async (req, res, next) => {
    // if (!req.body.artwork) throw new ExpressError("Invalid Data Error", 400);

    const artwork = new Artwork(req.body.artwork); // Create a new Artwork instance
    await artwork.save(); // Save the new artwork to the database
    res.redirect(`/artworks/${artwork._id}`); // Redirect to the new artwork's detail page
  })
);

// Route: Display details of a specific artwork by ID
app.get(
  "/artworks/:id",
  catchAsync(async (req, res) => {
    const artwork = await Artwork.findById(req.params.id); // Fetch the artwork by ID
    res.render("artworks/show", { artwork }); // Pass the artwork to the show view
  })
);

// Route: Display the form to edit a specific artwork by ID
app.get(
  "/artworks/:id/edit",
  catchAsync(async (req, res) => {
    const artwork = await Artwork.findById(req.params.id); // Fetch the artwork by ID
    res.render("artworks/edit", { artwork, artworkTypes }); // Pass the artwork and artworkTypes to the edit view
  })
);

// Route: Handle the update of a specific artwork by ID
app.put(
  "/artworks/:id",
  ValidateArtwork,
  catchAsync(async (req, res) => {
    const { id } = req.params; // Extract the artwork ID from the request parameters
    const artwork = await Artwork.findByIdAndUpdate(
      id,
      { ...req.body.artwork }, // Spread the updated artwork data
      { new: true } // Return the updated artwork
    );
    res.redirect(`/artworks/${artwork._id}`); // Redirect to the updated artwork's detail page
  })
);

// Route: Handle the deletion of a specific artwork by ID
app.delete(
  "/artworks/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params; // Extract the artwork ID from the request parameters
    await Artwork.findByIdAndDelete(id); // Delete the artwork from the database
    res.redirect("/artworks"); // Redirect to the list of artworks
  })
);

app.all(/(.*)/, (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong";
  res.status(statusCode).render("error", { err });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Serving on port 3000");
});
