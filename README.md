## Introduction
A full-stack blog CMS application with ```Node.js```, ```Express.js```, ```MongoDB```, ```Mongoose``` and ```Multer```.

## Demo
![demo](docs/demo.gif)

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
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/8a1bac21-5466-4ee5-92a0-c5355c73b4aa)

### Read, Create, Update & Delete Posts 
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/b4e519bc-5840-475c-bc2a-b916bf46a568)

### Server Side Vadiation
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/96ffdce3-7b0d-44e9-9133-57495b5623c8)

### Image Upload, Tags & WYSWYG Editor
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/80ace44f-df9b-43fb-aa41-2f6dd80ec7ba)


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
