## Introduction
A full-stack blog CMS application with ```Node.js```, ```Express.js```, ```MongoDB```, ```Mongoose``` and ```Multer```.

## Showcase

## Features
- List latest posts with Pagination
- Allow readers to Search posts
- Custom Authentication for Admin user (Login & Logout) by mongoose & bcrypt.
- User Password Hashing by bcrypt
- Multiple Admin users
- Post Thumbnail Upload feature by Multer
- Admin user can Create, Edit, Update, Delete posts
- Post with multiple Tags
- WYSWYG Editor for posts content by TinyMCE.

## Installation & Setup

- ```npm run start``` - This command will start the app server.
- ```npm run dev``` - It will run the app server and look any changes in code by nodemon. 
- ```npm run make-user``` - It will make a admin user in database according credentials given ```.env``` file.
- 
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
