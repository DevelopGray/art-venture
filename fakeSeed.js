const mongoose = require("mongoose");
const { Artwork } = require("./models/artwork"); // Destructure the Artwork model

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

// Seed function to populate the database with initial data
const seedDB = async () => {
  // Delete all existing artwork documents
  await Artwork.deleteMany({});
  console.log("Cleared existing artwork data");

  // Array of artwork data to seed the database
  const artworks = [
    {
      title: "Urban Jungle",
      description:
        "A vibrant mural depicting the fusion of nature and city life.",
      artist: "Alex Rivera",
      location: "New York, NY",
      type: "Mural",
      images: ["https://example.com/images/urban_jungle.jpg"],
    },
    {
      title: "Whispering Winds",
      description: "A kinetic sculpture that moves gracefully with the wind.",
      artist: "Samantha Lee",
      location: "Chicago, IL",
      type: "Kinetic Art",
      images: ["https://example.com/images/whispering_winds.jpg"],
    },
    {
      title: "Digital Dreams",
      description:
        "An interactive digital installation exploring virtual realities.",
      artist: "Jordan Kim",
      location: "San Francisco, CA",
      type: "Digital Art",
      images: ["https://example.com/images/digital_dreams.jpg"],
    },
    {
      title: "Echoes of Time",
      description:
        "A sound art piece capturing the historical essence of the city.",
      artist: "Liam O'Connor",
      location: "Boston, MA",
      type: "Sound Art",
      images: ["https://example.com/images/echoes_of_time.jpg"],
    },
    {
      title: "Light Waves",
      description: "A mesmerizing light art installation along the riverbank.",
      artist: "Nina Patel",
      location: "Austin, TX",
      type: "Light Art",
      images: ["https://example.com/images/light_waves.jpg"],
    },
    {
      title: "Nature's Embrace",
      description:
        "A land art piece integrating natural elements into its design.",
      artist: "Carlos Mendes",
      location: "Portland, OR",
      type: "Land Art",
      images: ["https://example.com/images/natures_embrace.jpg"],
    },
    {
      title: "Harmony in Motion",
      description: "A kinetic art sculpture symbolizing balance and movement.",
      artist: "Emily Zhang",
      location: "Seattle, WA",
      type: "Kinetic Art",
      images: ["https://example.com/images/harmony_in_motion.jpg"],
    },
    {
      title: "Voices Unheard",
      description:
        "A performance art piece giving a platform to marginalized communities.",
      artist: "Ravi Singh",
      location: "Los Angeles, CA",
      type: "Performance Art",
      images: ["https://example.com/images/voices_unheard.jpg"],
    },
    {
      title: "Reflections",
      description:
        "A mosaic installation reflecting the diverse cultures of the neighborhood.",
      artist: "Maria Gonzalez",
      location: "Miami, FL",
      type: "Mosaic",
      images: ["https://example.com/images/reflections.jpg"],
    },
    {
      title: "Skyline Dreams",
      description: "A mural capturing the aspirations of the city's youth.",
      artist: "David Brown",
      location: "Atlanta, GA",
      type: "Mural",
      images: ["https://example.com/images/skyline_dreams.jpg"],
    },
    {
      title: "Silent Echo",
      description: "A statue commemorating the city's rich musical heritage.",
      artist: "Olivia Harris",
      location: "Nashville, TN",
      type: "Statue",
      images: ["https://example.com/images/silent_echo.jpg"],
    },
    {
      title: "Unity Fountain",
      description:
        "A fountain symbolizing the unity and strength of the community.",
      artist: "Ethan Clark",
      location: "Denver, CO",
      type: "Fountain",
      images: ["https://example.com/images/unity_fountain.jpg"],
    },
    {
      title: "Graffiti Chronicles",
      description:
        "A graffiti wall narrating the history of street art in the city.",
      artist: "Zoe Martinez",
      location: "Philadelphia, PA",
      type: "Graffiti",
      images: ["https://example.com/images/graffiti_chronicles.jpg"],
    },
    {
      title: "Interactive Odyssey",
      description:
        "An interactive art installation engaging visitors in a visual journey.",
      artist: "Lucas Thompson",
      location: "San Diego, CA",
      type: "Interactive Art",
      images: ["https://example.com/images/interactive_odyssey.jpg"],
    },
    {
      title: "Temporal Mirage",
      description:
        "A temporary installation exploring the concept of time and space.",
      artist: "Ava White",
      location: "Las Vegas, NV",
      type: "Temporary Installation",
      images: ["https://example.com/images/temporal_mirage.jpg"],
    },
    {
      title: "Projection of Dreams",
      description:
        "A projection mapping art piece transforming the city's architecture.",
      artist: "Mason Green",
      location: "Orlando, FL",
      type: "Projection Mapping",
      images: ["https://example.com/images/projection_of_dreams.jpg"],
    },
    {
      title: "Environmental Echo",
      description:
        "An environmental art installation highlighting conservation efforts.",
      artist: "Sophia Adams",
      location: "Portland, ME",
      type: "Environmental Art",
      images: ["https://example.com/images/environmental_echo.jpg"],
    },
    {
      title: "Street Symphony",
      description:
        "A street art piece blending visual art with musical elements.",
      artist: "Benjamin Scott",
      location: "New Orleans, LA",
      type: "Street Art",
      images: ["https://example.com/images/street_symphony.jpg"],
    },
    {
      title: "Digital Pulse",
      description:
        "A digital art installation reflecting the heartbeat of the city.",
      artist: "Isabella King",
      location: "San Jose, CA",
      type: "Digital Art",
      images: ["https://example.com/images/digital_pulse.jpg"],
    },
    {
      title: "Graffiti Legends",
      description: "A graffiti mural honoring the pioneers of street art.",
      artist: "James Wilson",
      location: "Detroit, MI",
      type: "Graffiti",
      images: ["https://example.com/images/graffiti_legends.jpg"],
    },
    {
      title: "Mosaic of Cultures",
      description:
        "A mosaic artwork celebrating the city's diversity and heritage.",
      artist: "Ella Baker",
      location: "St. Louis, MO",
      type: "Mosaic",
      images: ["https://example.com/images/mosaic_of_cultures.jpg"],
    },
    {
      title: "Whispers of the Wind",
      description:
        "A relief sculpture that captures the motion of the wind in solid form.",
      artist: "Nathan Torres",
      location: "Salt Lake City, UT",
      type: "Relief",
      images: ["https://example.com/images/whispers_of_the_wind.jpg"],
    },
    {
      title: "Eternal Glow",
      description:
        "A light art installation that glows softly in the evenings, creating a serene atmosphere.",
      artist: "Grace Evans",
      location: "Phoenix, AZ",
      type: "Light Art",
      images: ["https://example.com/images/eternal_glow.jpg"],
    },
    {
      title: "Ocean's Lullaby",
      description:
        "A sound art installation that replicates the calming sound of ocean waves.",
      artist: "Henry Wright",
      location: "Honolulu, HI",
      type: "Sound Art",
      images: ["https://example.com/images/oceans_lullaby.jpg"],
    },
    {
      title: "The Thinker’s Haven",
      description:
        "A statue representing the peaceful contemplation of human thought.",
      artist: "Amelia Brooks",
      location: "Washington, DC",
      type: "Statue",
      images: ["https://example.com/images/thinkers_haven.jpg"],
    },
    {
      title: "Harmony Falls",
      description:
        "A fountain that combines flowing water with intricate stone carvings.",
      artist: "Sebastian Reed",
      location: "Charleston, SC",
      type: "Fountain",
      images: ["https://example.com/images/harmony_falls.jpg"],
    },
    {
      title: "Rebirth of the Forest",
      description:
        "An environmental art project using recycled materials to depict a growing forest.",
      artist: "Penelope Turner",
      location: "Boulder, CO",
      type: "Environmental Art",
      images: ["https://example.com/images/rebirth_forest.jpg"],
    },
    {
      title: "Starlight Symphony",
      description:
        "A kinetic sculpture inspired by the movement of stars across the night sky.",
      artist: "Christopher Howard",
      location: "Santa Fe, NM",
      type: "Kinetic Art",
      images: ["https://example.com/images/starlight_symphony.jpg"],
    },
    {
      title: "Voices of the Past",
      description:
        "A relief art installation paying homage to historical figures of the city.",
      artist: "Lucy Carter",
      location: "Savannah, GA",
      type: "Relief",
      images: ["https://example.com/images/voices_past.jpg"],
    },
    {
      title: "Festival of Colors",
      description:
        "A vibrant interactive art piece celebrating community festivals and traditions.",
      artist: "Julian Barnes",
      location: "Madison, WI",
      type: "Interactive Art",
      images: ["https://example.com/images/festival_colors.jpg"],
    },
    {
      title: "Timeless Horizon",
      description:
        "A land art piece that blends seamlessly into the natural landscape.",
      artist: "Ruby Simmons",
      location: "Jackson Hole, WY",
      type: "Land Art",
      images: ["https://example.com/images/timeless_horizon.jpg"],
    },
    {
      title: "Reflections of Light",
      description:
        "A light installation that mirrors the changing hues of the sunset.",
      artist: "Samuel Gray",
      location: "Palm Springs, CA",
      type: "Light Art",
      images: ["https://example.com/images/reflections_light.jpg"],
    },
    {
      title: "Bridge to Imagination",
      description:
        "A digital art projection transforming a pedestrian bridge into a dynamic canvas.",
      artist: "Charlotte Peterson",
      location: "Pittsburgh, PA",
      type: "Projection Mapping",
      images: ["https://example.com/images/bridge_imagination.jpg"],
    },
    {
      title: "Voices of the Sea",
      description:
        "A sound art installation replicating maritime echoes and calls.",
      artist: "Ezra Robinson",
      location: "Anchorage, AK",
      type: "Sound Art",
      images: ["https://example.com/images/voices_sea.jpg"],
    },
    {
      title: "Phoenix Rising",
      description: "A sculpture symbolizing hope and resilience.",
      artist: "Victoria Bennett",
      location: "Las Cruces, NM",
      type: "Sculpture",
      images: ["https://example.com/images/phoenix_rising.jpg"],
    },
    {
      title: "Infinite Reflections",
      description:
        "A mirrored installation creating endless patterns and perspectives.",
      artist: "Oscar Walker",
      location: "Key West, FL",
      type: "Installation",
      images: ["https://example.com/images/infinite_reflections.jpg"],
    },
    {
      title: "Dreamscapes",
      description:
        "A mural featuring surrealistic landscapes blending reality and imagination.",
      artist: "Clara Bell",
      location: "Santa Barbara, CA",
      type: "Mural",
      images: ["https://example.com/images/dreamscapes.jpg"],
    },
    {
      title: "Community Canvas",
      description:
        "An interactive graffiti wall inviting public participation.",
      artist: "Nicholas Perry",
      location: "Boise, ID",
      type: "Graffiti",
      images: ["https://example.com/images/community_canvas.jpg"],
    },
    {
      title: "Rise and Fall",
      description: "A kinetic sculpture representing the ebb and flow of life.",
      artist: "Isla Jenkins",
      location: "Duluth, MN",
      type: "Kinetic Art",
      images: ["https://example.com/images/rise_fall.jpg"],
    },
    {
      title: "Path of Legends",
      description:
        "A temporary installation commemorating local heroes and historical events.",
      artist: "Theo Foster",
      location: "Cleveland, OH",
      type: "Temporary Installation",
      images: ["https://example.com/images/path_legends.jpg"],
    },
    {
      title: "Aurora's Embrace",
      description:
        "A light art piece recreating the colors of the northern lights.",
      artist: "Madeline Hughes",
      location: "Fairbanks, AK",
      type: "Light Art",
      images: ["https://example.com/images/auroras_embrace.jpg"],
    },
    {
      title: "Mosaic of Hope",
      description: "A mosaic symbolizing unity and community resilience.",
      artist: "Tristan Collins",
      location: "Charlottesville, VA",
      type: "Mosaic",
      images: ["https://example.com/images/mosaic_hope.jpg"],
    },
  ];

  // Insert artworks into the database
  await Artwork.insertMany(artworks);
  console.log("Seed data inserted successfully!");
};

// Run the seed function
seedDB();
