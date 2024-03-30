# PDF Report Generator Web Application

Description

This project is a web application that allows users to generate PDF documents with custom content. Users can log in, fill out a form with data, and generate a PDF document based on the entered information. The application is built using React for the frontend and Django for the backend. It utilizes PostgreSQL as the database for storing user data, JWT for user authentication, and xhtml2pdf for generating PDFs.

# Live URL

The live version of this application is available at https://report-generator-frontend.vercel.app/

# Demo Credentials
username: admin

password: admin

# Features

    User authentication with JWT
    Form for entering data to generate PDF Report
    Dynamic PDF generation based on user input
    Downloadable PDF documents

# Installation

    Clone the repository.
    Navigate to the backend directory and install the Django dependencies.

Backend Repo https://github.com/raufp6/report-generator

```
pip install -r requirements.txt
```

Set up the PostgreSQL database and configure the database settings in .env.
Migrate the database.


```
python manage.py migrate
```

Navigate to the frontend directory and install the React dependencies.

Add API URL in .env

VITE_APP_API_URL=http://localhost:8000/api/
VITE_BACKEND_URL=http://localhost:8000/



```
npm install
```

Start the backend server.

```
python manage.py runserver
```

Start the frontend server.

```
    npm start
```

