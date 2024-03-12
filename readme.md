# CMC E-commerce

E-commerce application built with the MERN stack.

## Project Structure

- **backend:** Contains the source code for the backend.
- **frontend:** Contains the source code for the frontend.
- **uploads:** Directory for storing uploaded files.
- **.env:** File for environment variables.
- **package.json:** Project configuration file.

## Technologies Used

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Express Mongo Sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
- [Helmet](https://helmetjs.github.io/)
- [HPP](https://www.npmjs.com/package/hpp)
- [XSS Clean](https://www.npmjs.com/package/xss-clean)

### Frontend

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)

## Configuration

1. Install backend dependencies by running `npm install` in the root folder.

2. Set up environment variables by creating a `.env` file at the project's root.

## Scripts

all the script should be run in a root folder 

### Backend

- `npm start`: Starts the backend server.
- `npm run server`: Starts the backend server using nodemon.
- `npm run dev`: Simultaneously runs the backend and frontend in development mode.
- `npm run data:import`: Imports data using the seeder.
- `npm run data:destroy`: Destroys data using the seeder.

### Frontend

- `npm start`: Starts the frontend application in development mode.
- `npm run build`: Builds the frontend application for production.

## Building and Deployment

Before deploying, run the following script to include the initial admin user:

```bash
npm run data:import -i