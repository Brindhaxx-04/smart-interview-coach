# Smart Interview Coach

A web-based interview practice platform that helps users prepare for common technical and HR interview questions.

## 🚀 Features

* Practice common interview questions
* Submit answers directly through the web interface
* Receive an automatic score out of 10
* Get strengths and improvement suggestions
* Receive structured interview feedback
* Move to the next question easily
* Responsive and professional user interface

## 🛠️ Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* FastAPI
* Uvicorn

### Development Tools

* Git
* GitHub
* AI-assisted development

## 📁 Project Structure

```text
smart-interview-coach/
│
├── backend/
│   ├── main.py
│   └── routes/
│       └── interview.py
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── AI_USAGE_LOG.md
├── README.md
└── .gitignore
```

## ▶️ Run Locally

Clone the repository and open the project folder.

Install the required packages:

```bash
pip install fastapi uvicorn
```

Start the backend:

```bash
uvicorn backend.main:app
```

The backend will run at:

```text
http://127.0.0.1:8000
```

Open the frontend using a local development server such as VS Code Live Server.

## 🔄 How It Works

1. The application loads interview questions from the FastAPI backend.
2. The user selects a question and writes an answer.
3. The answer is sent to the backend for evaluation.
4. The system generates a score and structured feedback.
5. The user can continue to the next interview question.

## 🤖 AI-Assisted Development

AI tools were used during development for project planning, code assistance, debugging, evaluation logic, frontend improvements, and troubleshooting.

Detailed information is available in [`AI_USAGE_LOG.md`](AI_USAGE_LOG.md).

## 🎯 Purpose

The goal of Smart Interview Coach is to provide students and job seekers with a simple platform to practice interview communication and receive immediate structured feedback.

## 👩‍💻 Development

This project was developed incrementally during the hackathon with continuous testing, debugging, and GitHub commits.

