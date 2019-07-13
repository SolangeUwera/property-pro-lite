# Property-pro-lite
Property Pro Lite is a platform where people can create and/or search properties for sale or rent.
- Hosted UI link https://solangeuwera.github.io/property-pro-lite/

# Motivation
 property pro lite is  avery good project, i worked on it being more concetrated, because can be importanta to more people than i can think now. is the project that can exist for so long and work for long. people can sale and rent properties .
 the property pro lite is the most useful single tool for the sale and rent using internet.



 # code style
 1.HTML
 2.CSS
 3.API


 # Tech/Frame work used
 - mocha 
 - node js
 - express js

 # screenshoot
![sss](https://user-images.githubusercontent.com/50421204/61154314-a5831800-a4a2-11e9-95cf-4b1eeecb798a.PNG)
![Capture1](https://user-images.githubusercontent.com/50421204/61168655-4b1ba300-a506-11e9-8839-eb3e03c97e3c.PNG)
![Captured](https://user-images.githubusercontent.com/50421204/61168656-4bb43980-a506-11e9-8f89-f9bc82d91e61.PNG)
![Capturel](https://user-images.githubusercontent.com/50421204/61168657-4bb43980-a506-11e9-8063-81c9abed44e1.PNG)



 # code examples
 
- import { Router } from 'express';
- import propertiesController from '../controllers/propertiesController.js';
- const routes = Router();
- routes.get('/', propertiesController.getAll);
- routes.get('/:id', propertiesController.getSingle);
- routes.post("/api/v1/posts", propertiesController.Add);
- routes.put("/api/v1/posts/:id", propertiesController.updatePost);
- routes.delete("/api/v1/posts/:id", propertiesController.deletePost);
- export default routes;


- import express from 'express';
- import bodyParser from 'body-parser';
- import routes from './routers/index.js';
- // Instantiate express
- const app = express();
- // Set our port
- const port = process.env.PORT || 4500;
- // Configure app to user bodyParser
- app.use(bodyParser.urlencoded({ extended: true }));
- app.use(bodyParser.json());
- // Register our routes in app
- app.use('/', routes);
- // Start our server
- app.listen(port, () => {
    - console.log(`Server started on port ${port}`);
    
- });
- // Export our app for testing purposes
- export default app;




- import properties  from '../models/propertiesmodel.js';
- class propertiesController {
   -  // Get all all properties
   -  static getAll(req, res) {
        return res.status(200).json({
              -   properties,
                -  message: "All the properties",
          });
    }
     -  // Get a single property
    -  static getSingle(req, res) {
           -  const findproperty = properties.find(property => property.id === parseInt(req.params.id, 10));
            - if (findproperty) {
               -  return res.status(200).json({
                     -  property: findproperty,
                      - message: "A single property record",
               -  });
           -  }
            - return res.status(404).json({
                 -  message: "property record not found",
           -  });
    -  }
    
    -  static Add(req, res) {
     - const newId = parseInt(properties.length) + 1;
      - const {  
              -  id=newId,
            -  owner,
             - status,
             - price,
             - state,city,type, body } = req.body;
       - const newPost = {
        -  -id: newId,
         - owner,
          - status,
           -  price,
            -  city,state,type, body,
     -   };
      -   properties.push(newPost);
      -  return res.status(200).json({
        -  message: "created a new property"
       - });
 - }
 - static updatePost(req, res) {
       -  const { id } = req.params;
      -  const post = properties.find(updatePost => updatePost.id == id);
       - if (post) {
        - (post.owner = req.body.owner), (post.status = req.body.status), (post.state = req.body.state), (post.price = req.body.price),  - (post.type = req.body.type), (post.adress = req.body.adress),(post.body = req.body.body);
         - return res.status(201).json({
          -  message: "successfully updated",
          -  updatePost: post
        -  });
      -  } else {
       -   res.status(400).json({
         -   error: "property can not be updated"
        -  });
      -  }
 - }
      -  static deletePost(req, res) {
       -  let { id } = req.params;
        -  const findPost = properties.find(post => {
         -  return post.id == id;
           -  });
             - if (findPost) {
              -  const newPosts = properties.filter(post => {
                -  return post !== findPost;
              -  });
               - res.status(200).json({
                - message: "property successfully deleted",
                -  prperties: newPosts
               - });
             - } else {
              - res.status(400).json({
               -  error: "could not delete a property"
              -  });
            -  }
          -  }
        -  }
    
 - export default propertiesController;

 -  html home-page
 
 
 -  <!DOCTYPE html>
 - <html lang="en">

 - <head>
    -  <meta charset="UTF-8">
    -  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    -  <meta http-equiv="X-UA-Compatible" content="ie=edge">
    -  <title>welcome</title>
    -  <link rel="stylesheet" href=css/style.css>
 - </head>
 - <body>
    -  <header>
       -   <nav>
          -    <div class="logo">
             -     <h3>PropertyPro-lite</h3>
             - </div>
             - <ul class="nav-list">
                -  <li><a href="index.html">Home</a></li>
                -  <li><a href="./UI/services.html">Services</a></li>
                 - <li><a href="./UI/signin.html">Sign In</a></li>
                -  <li><a href="./UI/signup.html">Sign Up</a></li>
    
            -  </ul>
        -  </nav>
     - </header>
     - <section id="pro">
       -   <div class="container ">

             - <h1 class="containeri1">property pro lite</h1>
             - <p class="containeri">property pro lite is a platform where people can create and/or search properties for sale or  -  - rent. </p>
         - </div>
    -  </section>
     - <section id="prope">
        -  -  <div class="container ">
        
           -   <div class="order">
              -        <div class bed071>
              -    <h1 class="bed07">bed-rooms</h1>
               -   <img src="images/hhhh.jpg " id="image">
                -  <p class="p1">bed-room are availables every day </p>
            -  </div >
            -  <div class="game">
               -   <h1 class="bed08">mini-flats</h1>
                -  <img src="images/pre0.jpg " id="imagep">
                 - <p class="p2">we sale and rent mini-flats every day.
                 -  </p>
           -   </div>
           -   </div>
    -  </section>
    -  <footer>
                   -    <label ><a href ="./UI/viewproperty.html" class="link" >view-properties</a></label> 
                     -  <input type="search"  placeholder= "search properties" id="serv">
   -   </footer>

 - </body>

 - </html>

 
 # Tech/Frame work used
 build with VS code
 
 # Required Feature
 
- User can sign up.
- User can login.
- User (agent) can post a property advert.
- User (agent) can update the details of a property advert. 
- User (agent) can mark his/her posted advert as sold. 
-  (agent) can delete a property advert. 
- User can view all properties adverts. 
- User can view all properties of a specific type - 2 bedroom, 3 bedroom, mini flat etc. 
- User can view a specific property advert. 

# optional feature
- flag/report a posted AD as fraudulent. 
- User can add multiple pictures to a posted ad.
- User can reset password.
- The application should display a Google Map with Marker showing the red-flag or intervention location. 
 
 # THE END POINTS OF THE PROJECT

- POST	/api/v1/property/	create property adrvert
- GET	/api/v1/property/	public	get all property
- GET	/api/v1/property/id	public	get specific property
- DELETE	/api/v1/property/id	public	delete specific property
- PUT	/api/v1/property/id	public	update specific property


# Frontend
- HTML
- CSS 
- Javascript
# Backend
- NodeJs
- Express JS
- Mocha
- Chai

# Author:
 -  UWERA Solange 
