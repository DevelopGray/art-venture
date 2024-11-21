const mongoose = require("mongoose");
const Artwork = require("./models/artwork"); // Destructure the Artwork model

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/art-venture", {});

const db = mongoose.connection;
// Log an error if the database connection fails
db.on("error", console.error.bind(console, "connection error:"));
// Log a success message once the database is connected
db.once("open", async () => {
  console.log("Database connected");
  await seedDB(); // Run the seed function after connecting
  mongoose.connection.close(); // Close the database connection when done
});

console.log(Artwork);

// Seed function to populate the database with initial data
const seedDB = async () => {
  // Delete all existing artwork documents
  await Artwork.deleteMany({});
  console.log("Cleared existing artwork data");

  // Array of real artwork data to seed the database
  const artworks = [
    {
      title: "Cloud Gate",
      description:
        "Also known as 'The Bean,' this reflective sculpture has become a modern symbol of Chicago. It encourages interaction as visitors see distorted reflections of themselves and the surrounding skyline.",
      artist: "Anish Kapoor",
      location: "Chicago, IL",
      type: "Sculpture",
      images: [
        "https://upload.wikimedia.org/wikipedia/en/c/c1/Cloud_Gate_%28The_Bean%29_from_east%27.jpg",
      ],
    },
    {
      title: "LOVE Sculpture",
      description:
        "This iconic sculpture featuring the word 'LOVE' stacked with the letter 'O' leaning to the side has been a popular symbol for decades.",
      artist: "Robert Indiana",
      location: "New York City, NY",
      type: "Sculpture",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/6/68/LOVE_sculpture_NY.JPG",
      ],
    },
    {
      title: "Chicano Park Murals",
      description:
        "A series of murals celebrating Mexican culture, history, and the Chicano movement, painted on the support pillars of a freeway.",
      artist: "Various artists",
      location: "Chicano Park, San Diego, CA",
      type: "Mural",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Chicano_Park_Murals.png",
      ],
    },
    {
      title: "The Awakening",
      description:
        "A giant sculpture depicting a man struggling to emerge from the earth, representing rebirth and the struggle of life.",
      artist: "J. Seward Johnson",
      location: "National Harbor, MD",
      type: "Sculpture",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Beach_area_with_sculpture_of_man_at_National_Harbor_in_Maryland.JPG",
      ],
    },
    {
      title: "Spiral Jetty",
      description:
        "A large land art installation made from earth, salt crystals, and rocks, forming a coil that stretches into Great Salt Lake.",
      artist: "Robert Smithson",
      location: "Rozel Point, Great Salt Lake, UT",
      type: "Land Art",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Iconic_view_2.jpg",
      ],
    },
    {
      title: "Urban Light",
      description:
        "A collection of restored antique street lamps arranged in a grid, creating a beautiful public artwork that lights up at night.",
      artist: "Chris Burden",
      location: "Los Angeles County Museum of Art (LACMA), Los Angeles, CA",
      type: "Installation",
      images: [
        "https://upload.wikimedia.org/wikipedia/en/d/df/Urban_Light_at_night.JPG",
      ],
    },
    {
      title: "Reflecting Absence",
      description:
        "Two large reflecting pools representing the void left by the Twin Towers, surrounded by names of the victims.",
      artist: "Michael Arad and Peter Walker",
      location: "National September 11 Memorial & Museum, New York, NY",
      type: "Fountain",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/f/fc/9-11_Memorial_and_Museum_%2828815276064%29.jpg",
      ],
    },
    {
      title: "Bay Lights",
      description:
        "An expansive light art installation along the cables of the Bay Bridge, displaying shifting patterns that captivate viewers at night.",
      artist: "Leo Villareal",
      location: "San Francisco Bay Bridge, San Francisco, CA",
      type: "Light Art",
      images: [
        "https://upload.wikimedia.org/wikipedia/en/2/2d/Bay_Bridge_reflections_at_night.gif",
      ],
    },
    {
      title: "The Gates",
      description:
        "A temporary installation of 7,503 fabric panels suspended along 23 miles of pathways in Central Park.",
      artist: "Christo and Jeanne-Claude",
      location: "Central Park, New York, NY",
      type: "Temporary Installation",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/The_Gates%2C_a_site-specific_work_of_art_by_Christo_and_Jeanne-Claude_in_Central_Park%2C_New_York_City_LCCN2011633978.jpg",
      ],
    },
    {
      title: "Bronze Fonz",
      description:
        "A life-sized bronze statue depicting the character Arthur Fonzarelli ('The Fonz') from the television show 'Happy Days.'",
      artist: "Gerald P. Sawyer",
      location: "Milwaukee Riverwalk, Milwaukee, WI",
      type: "Statue",
      images: [
        "https://upload.wikimedia.org/wikipedia/en/b/b9/SawyerBronzeFonz2008.jpg",
      ],
    },
  ];

  // Insert artworks into the database
  await Artwork.insertMany(artworks);
  console.log("Real seed data inserted successfully!");
};

// Run the seed function
seedDB();
