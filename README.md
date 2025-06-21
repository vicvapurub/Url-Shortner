# Url Shortner 🌐✂️

Welcome to the **Url Shortner** repository! This project allows you to simplify, share, and track your links with ease. Whether you are a developer looking to integrate a URL shortening service into your application or a user wanting to manage your links better, this tool is for you.

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-brightgreen)](https://github.com/vicvapurub/Url-Shortner/releases)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **URL Shortening**: Convert long URLs into short, manageable links.
- **Link Tracking**: Monitor clicks and gather analytics on your links.
- **User Management**: Create accounts to manage your links securely.
- **Responsive Design**: Access the application on any device.
- **RESTful API**: Integrate easily with your applications.

## Technologies Used

This project is built using a variety of technologies to ensure a smooth user experience and efficient backend operations:

- **Frontend**: 
  - React.js
  - React Hooks
  - Redux Toolkit
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with MongoDB Atlas)
- **Data Access**: 
  - DAO Design Pattern
- **Routing**: 
  - TanStack Router
- **Data Fetching**: 
  - TanStack React Query

## Getting Started

To get started with the Url Shortner, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vicvapurub/Url-Shortner.git
   cd Url-Shortner
   ```

2. **Install Dependencies**:
   For the frontend:
   ```bash
   cd client
   npm install
   ```

   For the backend:
   ```bash
   cd server
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the server directory and add your MongoDB connection string and any other necessary configurations.

4. **Run the Application**:
   Start the backend server:
   ```bash
   cd server
   npm start
   ```

   Start the frontend application:
   ```bash
   cd client
   npm start
   ```

Your application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can access it through your web browser. Here’s how to use the Url Shortner:

1. **Create an Account**: Sign up to start managing your links.
2. **Shorten a URL**: Enter a long URL in the input field and click the "Shorten" button.
3. **Track Your Links**: View analytics for each shortened link in your dashboard.

## API Endpoints

The Url Shortner provides several API endpoints to interact with the service:

### Shorten URL

- **Endpoint**: `POST /api/shorten`
- **Request Body**:
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "shortenedUrl": "http://short.url/abc123"
  }
  ```

### Get Link Analytics

- **Endpoint**: `GET /api/analytics/:id`
- **Response**:
  ```json
  {
    "clicks": 150,
    "createdAt": "2023-01-01T00:00:00Z"
  }
  ```

### List User Links

- **Endpoint**: `GET /api/user/links`
- **Response**:
  ```json
  [
    {
      "shortenedUrl": "http://short.url/abc123",
      "originalUrl": "https://example.com",
      "clicks": 150
    }
  ]
  ```

## Folder Structure

The project follows a structured approach to maintain clarity and organization:

```
Url-Shortner/
├── client/            # Frontend code
│   ├── public/        # Static files
│   ├── src/           # React components and hooks
│   └── package.json    # Frontend dependencies
├── server/            # Backend code
│   ├── controllers/   # API controllers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   └── package.json    # Backend dependencies
└── README.md          # Project documentation
```

## Contributing

We welcome contributions to the Url Shortner project! If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request.

Please ensure that your code adheres to the existing style and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or suggestions, feel free to reach out:

- **Email**: your.email@example.com
- **GitHub**: [vicvapurub](https://github.com/vicvapurub)

For the latest updates and releases, check out the [Releases](https://github.com/vicvapurub/Url-Shortner/releases) section.

Thank you for checking out the Url Shortner! We hope you find it useful for your link management needs.