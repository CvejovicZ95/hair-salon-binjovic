# Hair Salon Website

## Project Overview

This project involves creating a visually appealing website for the hair salon "Binjovic," allowing users to easily purchase products or reserve treatments. The site also features a user-friendly management interface for the owner/manager to efficiently update services, manage products, handle customer orders, and manage gallery photos.

## Features

- **Authentication:**
  - Utilizes JSON Web Tokens (JWT) for secure authentication.
  - JWT is stored in cookies and sent with requests where necessary, ensuring robust protection for admin accounts.

- **Users:**
  - Create Orders (Buy Products)
  - Intuitive and visually appealing user interface for an enhanced user experience.

- **Order Notifications:**
  Integration with Mailgun to send order confirmations to users via email. This ensures that customers receive immediate and reliable order confirmations directly to their inbox.
  
- **Owner/Manager:**
  - Log in
  - Logout
  - Manage Orders (processed, sent)
  - Manage Services (update, add new services, delete)
  - Manage Products (add, delete, update, mark in or out of stock)
  - Manage Gallery (add photos, delete photos)
  - Streamlined admin interface with secure JWT management.

## Technologies Used

- JavaScript
- React.js
- Node.js
- Express.js
- MongoDB
- SCSS

## Environment Variables (Server Folder)

- `DATABASE`: MongoDB connection string  
- `PORT`: Port (e.g., 4500)

## Environment Variables (Client Folder)

- `REACT_APP_API_BASE_URL`: Base URL for API requests

## Start Scripts

- **Server:**
  - `nodemon server`
- **Client:**
  - `npm start`

## Additional Notes

- The website features a highly intuitive and visually attractive design, ensuring a seamless user experience.
- JWT implementation for admin authentication provides security, protecting sensitive management functions from unauthorized access.
