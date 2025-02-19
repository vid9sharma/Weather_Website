# Weather App

This is a simple weather application built using Node.js, Express, and Handlebars. It allows users to get the current weather information for a given location using the Weatherstack API and Mapbox API.

## Installation

1. Clone the repository:
```sh
   git clone https://github.com/vid9sharma/Weather_Website.git
```

2. Navigate to the project directory:
```sh
cd YOUR_REPOSITORY_NAME
```

3. Install the dependencies:
```sh
npm install
```

## Usage
1. Start the server:
```sh
npm start
```

2. For development mode with automatic restarts:
```sh
npm run dev
```

3. Open your browser and navigate to:
```sh
http://localhost:3000
```

## Endpoints
- / - Home page with a form to search for weather information.
- /about - About page with information about the site.
- /help - Help page with a help message.
- /weather - Endpoint to fetch weather information for a given address.
- /products - Example endpoint to demonstrate query parameters.
- /* - 404 page for handling unknown routes.

## Project Files
- app.js - Main application file that sets up the Express server and routes.
- forecast.js - Utility to fetch weather information from Weatherstack API.
- geocode.js - Utility to fetch geolocation information from Mapbox API.
- public - Directory containing static assets (CSS, JS, images).
- templates - Directory containing Handlebars templates and partials.
