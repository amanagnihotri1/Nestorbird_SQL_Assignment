[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **SQL Form**
This project aims at implementing Complex Survey form using nested branching and conditional rendering of next question.



## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [License](#license)
## Introduction
This project aims at implementing Complex Survey form using nested branching and conditional rendering for next question.So Basically it renders first question from API end point open at backend.and for next question to render based on condition option value of previous question is passed to api end point and based on parameter recieved at api end point question gets rendered and at the end submit button will trigger user input submission.
## Features

- Dynamic Survey Form from backend
- Gets user input as radio button provided
- Question based on current option chosen
- At the end of last question using Submit button will make your inputs submit to the table in PostgreSQL.

## Technologies Used

- Express.js
- PostgreSQL(node-pg)
- HTML
- CSS
- JavaScript


## Prerequisites

Before running this project, ensure you have the following installed:

- ### ExpressJS
    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- ### PostgreSQL 
    PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

- ### VanillaJS
   The term vanilla script is used to refer to the pure JavaScript (or we can say plain JavaScript) without any type of additional library.The vanilla script is one of the lightest weight frameworks ever. It is very basic and straightforward to learn as well as to use. You can create significant and influential applications as well as websites using the vanilla script.
## Installation

1. Clone the repository:

  ``` bash

  git clone https://github.com/amanagnihotri1/Nestorbird_SQL_Assignment

```
2. Navigate to the project directory:

``` bash
cd local_folder_name
 ```
3. Install Dependencies
  
```bash
 npm install
 ```
 4. Setup PostgreSQL Database:
  ```bash
 dbname="your_db_name",
user="your_user_name",
password="your_password",
host="your_hostname",
port="your_portname",
```
5. Run the Application:
 ```bash
 nodemon server.js
 ```
6. You can view your Survey Page on 

    http://127.0.0.1:5500/form_frontend/form.html
## Authors

- [@amanagnihotri1](https://www.github.com/amanagnihotri1)

