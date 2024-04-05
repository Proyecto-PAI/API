# Sensor and Camera Data API

## Overview
This API serves as the bridge between sensor and camera data and the database, handling all HTTP requests for data storage and retrieval. It's designed to integrate seamlessly with IoT devices, enabling efficient data transmission to a MongoDB database.

## Features
- Receive data from sensors and cameras.
- Store data in MongoDB with robust schema validation.
- Retrieve stored data for analysis and visualization.
- Support for CORS, ensuring compatibility with web-based clients.

## Getting Started

### Prerequisites
- Node.js (v14 or newer recommended)
- MongoDB (local or cloud instance)

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-github-username/sensor-camera-api.git
cd sensor-camera-api
npm install
```

### Configuration
Create a `.env` file in the project's root directory. This file should include your MongoDB connection string, among other settings:

```plaintext
MONGODB_URL=mongodb+srv://your_mongodb_connection_string
```

### Running the API
To start the API in a development environment with hot reload features, use the following command:

```bash
npm run dev
```

For production environments, use:

```bash
npm start
```

## Usage
To send data from sensors or cameras to the API, make a HTTP POST request to the `/api/sensorsData` endpoint with the appropriate JSON payload.

```http
POST /api/sensorsData
Content-Type: application/json

{
  "actual_date": "YYYY-MM-DD HH:MM:SS",
  "air_temperature": 24.5,
  "air_humidity": 60
}
```

## Retrieving Data
To retrieve stored data, send a HTTP GET request to the /api/data endpoint.
```http
GET /api/data
```
## Author
Santiago Murillo Valencia.
