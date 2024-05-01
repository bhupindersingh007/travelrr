## Introduction
A full-stack blog CMS application based on MVC ```(Model, View & Controller)``` pattern with ```Node.js```, ```Express.js```, ```MongoDB```, ```Mongoose```, ```EJS``` and ```Multer```.

## Demo
https://github.com/bhupindersingh007/travelrr/assets/63149405/031ffa0b-5914-48b8-9fa7-37ee2fb2f719

## Features
- Latest posts with pagination
- Search functionality for posts
- Custom authentication for admin users using Mongoose and bcrypt
- Password hashing for users using bcrypt
- Support for multiple admin users
- Thumbnail upload feature for posts using Multer
- CRUD operations (Create, Read, Update, Delete) for admin users on posts
- Ability to assign multiple tags to posts
- Server-side validation for input data
- Integration of a WYSIWYG editor (TinyMCE) for post content
- Implementation of session-based alert messages

### Login
![Login](https://github.com/bhupindersingh007/travelrr/assets/63149405/0b14c89d-878f-42c0-bd78-ade343c2d8dc)

### Read, Create, Update & Delete Posts 
![Read, Create, Update & Delete Posts](https://github.com/bhupindersingh007/travelrr/assets/63149405/07e90896-603c-4471-a17f-e4ccf56e4f43)

### Server Side Vadiation
![Server Side Vadiation](https://github.com/bhupindersingh007/travelrr/assets/63149405/4acb71be-143b-4206-acbb-eb953590ead3)

### Image Upload, Tags & WYSWYG Editor
![Image Upload, Tags & WYSWYG Editor](https://github.com/bhupindersingh007/travelrr/assets/63149405/0aa88e64-3b72-40b8-9a50-4b4f76fc3056)


## Installation & Setup

- ```npm run start``` - This command will start the app server.
- ```npm run dev``` - It will run the app server and look any changes in code by nodemon. 
- ```npm run make-user``` - It will make a admin user in the database according to the credentials given in the ```.env``` file.
  
**NOTE:** Copy environment variables from ```.env.example``` into new ```.env``` and specify values.
 
## Packages
- ```express.js```
- ```express-session```
- ```method-override```
- ```ejs```
- ```mongoose```
- ```multer```
- ```dotenv```
- ```bcrypt```
- ```nodemon```
