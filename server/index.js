import express from 'express';
import bodyParser from 'body-parser';
import routes from './routers/index.js';
// Instantiate express
const app = express();
// Set our port
const port = process.env.PORT || 4500;
// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Register our routes in app
app.use('/', routes);
// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    
});
// Export our app for testing purposes
export default app;