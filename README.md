# Weather App

A simple weather application built with Node.js, Express, and Handlebars. Users can get current weather information for any location using the Weatherstack and Mapbox APIs.

## Features

- Search for real-time weather by location
- Responsive UI with Handlebars templates
- Error handling for invalid locations and API issues
- Modular code structure for easy maintenance

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/vid9sharma/Weather_Website.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd Weather_Website
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your API keys:
     ```
     WEATHERSTACK_API_KEY=your_weatherstack_key
     MAPBOX_API_KEY=your_mapbox_key
     ```

## Usage

1. **Start the server:**
   ```sh
   npm start
   ```

2. **For development mode with automatic restarts:**
   ```sh
   npm run dev
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Endpoints

- `/` - Home page with a weather search form
- `/about` - About page
- `/help` - Help page
- `/weather` - Fetch weather info for a given address (API endpoint)
- `/products` - Example endpoint for query parameters
- `*` - 404 page for unknown routes

## Project Structure

- `app.js` - Main Express server and route setup
- `utils/forecast.js` - Fetches weather data from Weatherstack
- `utils/geocode.js` - Fetches geolocation data from Mapbox
- `public/` - Static assets (CSS, JS, images)
- `templates/` - Handlebars views and partials
