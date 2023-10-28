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
- Server Side Validation
- WYSWYG Editor for posts content by TinyMCE.

### Login
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/d762c9a2-7a02-4a71-9c85-a97d0e66bb36)

### Read, Create, Update & Delete Posts 
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/966e48d6-1aa1-481d-9c86-52d100a4e44a)

### Server Side Vadiation
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/5e31f21e-804a-482a-8c0a-705753e8c87d)

### Image Upload, Tags & WYSWYG Editor
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/d9e15239-7db6-475f-afaf-7c92c1db4269)


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
