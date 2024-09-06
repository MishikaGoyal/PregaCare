# Pregnancy Assistance Platform

Welcome to the **Pregnancy Assistance Platform** — a comprehensive solution designed to support pregnant women throughout their journey. This platform offers tailored diet plans based on health reports, provides accurate trimester-based guidance, and leverages machine learning to help women perform yoga with real-time posture analysis using OpenCV.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Diet Recommendations**:
   - Women can upload health reports, and the platform generates personalized diet plans based on these reports using a trained model.
   
2. **Trimester Guidance**:
   - The platform offers trimester-specific information, including Do’s and Don’ts, to help women navigate each stage of pregnancy smoothly.

3. **Yoga Posture Analysis**:
   - Leveraging machine learning and OpenCV, the platform allows pregnant women to practice yoga in front of a camera. The ML model analyzes and provides real-time feedback on their posture, ensuring they perform yoga poses correctly and safely.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Machine Learning**: Python with OpenCV for yoga posture analysis
- **ML Libraries**: Mediapipe, TensorFlow (if applicable)
- **Authentication**: JSON Web Tokens (JWT)


## Installation

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Python](https://www.python.org/)
- [OpenCV](https://opencv.org/)

### Clone the Repository

- cd frontend
- npm install
- npm run dev

- cd models
- install all the modules prompted in the terminal while running these python files using pip or pip3
- python diet.py
- python pose.py

 

