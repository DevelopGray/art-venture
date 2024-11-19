# Art-Venture 🎨

**Art-Venture** is a full-stack web application designed to explore, showcase, and document incredible artworks from around the world. Whether you're a mural enthusiast, a graffiti lover, or someone passionate about digital and kinetic art, this platform aims to connect people through the power of artistic expression.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Current Progress](#current-progress)
- [Future Goals](#future-goals)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project

Art-Venture is inspired by the project YelpCamp but tailored to focus on public and private artworks. The platform allows users to:

- Browse a collection of artworks, including murals, sculptures, digital installations, and more.
- Add new artworks to the database with details like the title, artist, location, type, and optional images.
- Edit and delete existing artwork entries.
- Explore the rich diversity of art types via dynamic dropdowns and interactive forms.

This project is currently a work in progress and serves as a portfolio piece while learning full-stack web development.

---

## Features

- **CRUD Functionality**:
  - Create, Read, Update, and Delete artworks in the database.
- **Dynamic Dropdowns**:
  - Types of art are dynamically rendered from an enum, making the platform adaptable.
- **Image Support**:
  - Add image URLs to enhance the visual appeal of artwork entries.
- **Intuitive UI**:
  - Forms for adding and editing artworks with pre-filled values for convenience.
- **Responsive Design** _(upcoming)_:
  - Mobile-friendly layouts for seamless browsing.
- **User Authentication** _(upcoming)_:
  - Secure login and personalized features for users.

---

## Tech Stack

- **Frontend**:
  - HTML, CSS, EJS (Embedded JavaScript Templates)
- **Backend**:
  - Node.js, Express.js
- **Database**:
  - MongoDB, Mongoose ODM
- **Utilities**:
  - Method-Override (for PUT and DELETE routes)

---

## Current Progress

### Completed:

1. **Basic Routes**:
   - Home (`/`)
   - List Artworks (`/artworks`)
   - Add New Artwork (`/artworks/new`)
   - Edit Artwork (`/artworks/:id/edit`)
   - View Artwork Details (`/artworks/:id`)
2. **Dynamic Dropdown for Types**:
   - Enum values dynamically populate the dropdown.
3. **Database Seeding**:
   - Seed script (`seed.js`) to populate the database with example artworks.
4. **CRUD Operations**:
   - Fully functional Create, Read, Update, and Delete routes.

### Next Steps:

- Integrate user authentication.
- Add image upload support instead of URLs.
- Improve UI/UX with CSS frameworks (e.g., Bootstrap or Tailwind CSS).
- Add reviews and ratings for artworks.
- Deploy the app to a hosting platform like Heroku or Vercel.

---

## Future Goals

1. **User Profiles**:
   - Allow users to register, log in, and manage their own artworks.
2. **Geolocation**:
   - Display artworks on an interactive map.
3. **Review and Rating System**:
   - Users can leave reviews and ratings for each artwork.
4. **Responsive and Accessible Design**:
   - Ensure the app is usable across devices and accessible to all users.

---

## Installation

### Prerequisites:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DevelopGray/art-venture.git
   cd art-venture
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database (optional):
   ```bash
   node seed.js
   ```
4. Start the server:
   ```bash
   node index.js
   ```
5. Visit the app at:
   ```
   http://localhost:3000
   ```

---

## Usage

1. Navigate to `/artworks` to view all entries.
2. Click "Add New Artwork" to create an entry.
3. Edit or delete existing artworks as needed.
4. Experiment with the seeded data or add your own.

---

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a meaningful commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

Special thanks to the [Colt Steele Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/) for inspiring this project and helping build foundational knowledge in full-stack development.
