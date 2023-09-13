# Nick's E-Commerce Back End

Welcome to the E-Commerce Back End project! This project involves building the back end for an e-commerce website using Express.js and Sequelize to interact with a MySQL database. As a manager at an internet retail company, you want a robust back end that can compete with other e-commerce companies. This project helps you achieve that goal.

In this README, you will find information on how to set up, run, and test the application, as well as a brief overview of its structure and functionality.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Routes](#routes)
- [Video Walkthrough](#video-walkthrough)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- Dotenv

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
   git clone <https://github.com/NickUCLA/Nicks-eCommerce-Back-End>

2. Navigate to the project directory

3. Install the required dependencies:
   ` npm install`

## Database Setup

Before running the application, you need to set up your MySQL database and configure the environment variables. Follow these steps to set up the database:

1. Create a `.env` file in the project root directory.

2. In the `.env` file, add your MySQL database configuration:

```env
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
```

Use the schema.sql file located in the db folder to create the database schema and tables. You can do this using MySQL shell commands.

After creating the schema, you can seed the database with sample data by running the following command:
`npm run seed`

## Usage

To start the application, run the following command:
`npm start`

This command will synchronize the Sequelize models with the MySQL database and start the server.

## Routes

The application provides the following API routes for managing categories, products, and tags:

### Categories

- **GET /**: Retrieve all categories and their associated products.
- **GET /:id**: Retrieve a single category by ID and its associated products.
- **POST /**: Create a new category.
- **PUT /:id**: Update an existing category by ID.
- **DELETE /:id**: Delete a category by ID.

### Products

- **GET /**: Retrieve all products and their associated categories and tags.
- **GET /:id**: Retrieve a single product by ID and its associated categories and tags.
- **POST /**: Create a new product.
- **PUT /:id**: Update an existing product by ID.
- **DELETE /:id**: Delete a product by ID.

### Tags

- **GET /**: Retrieve all tags and their associated products.
- **GET /:id**: Retrieve a single tag by ID and its associated products.
- **POST /**: Create a new tag.
- **PUT /:id**: Update an existing tag by ID.
- **DELETE /:id**: Delete a tag by ID.

## Video Walkthrough

To see the functionality of the application in action, please watch the [video walkthrough](https://drive.google.com/file/d/1apLuYBpIaJB0Iyx0-ONMIc3u_AnH1I-F/view) that demonstrates the following:

- Connecting to a MySQL database using Sequelize.
- Seeding the database with sample data.
- Starting the application's server.
- Testing various API routes (GET, POST, PUT, DELETE) for categories, products, and tags using Insomnia.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvement, please open an issue on GitHub or create a pull request.

## License

This project is licensed under the MIT License.

© 2023 Nick Heal
