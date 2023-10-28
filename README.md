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
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/30e88824-3db2-4af9-ac0b-fceb8c8d1462)

### Read, Create, Update & Delete Posts 
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/a4b35dea-3c0d-466c-89e8-d89641765a4b)

### Server Side Vadiation
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/b4cd1928-c962-414e-a8dd-3f6f019f95a4)

### Image Upload, Tags & WYSWYG Editor
![image](https://github.com/bhupindersingh007/travelrr/assets/63149405/8437d79e-b57b-4d12-893e-03a26a6e595c)


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
