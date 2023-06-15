# Dockerized Full-Stack Web Application

This is a Dockerized full-stack web application built with Node.js Express as the backend server and Next.js as the frontend framework. The backend and frontend communicate with each other via APIs and are orchestrated using Docker Compose.

## Features

- **Backend Server**:
  - Built with Node.js and Express.
  - RESTful API endpoints.
  - Exposed on port 8080.

- **Frontend**:
  - Built with Next.js.
  - User-friendly interface.
  - Exposed on port 3000.

## Prerequisites

Make sure you have the following installed:

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project root directory:

   ```shell
   cd your-repo
   ```
3. Build the Docker images and start the containers:

    ```shell
   docker-compose up
   ```
4. Access the application:

- Backend: Open your browser and go to http://localhost:8080.
- Frontend: Open your browser and go to http://localhost:3000.

