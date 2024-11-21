# Swasthya

Swasthya is a web application designed to help users track their mood and sleep patterns while providing insights and suggestions for improving mental well-being and sleep quality. The application includes features like mood logging, sleep tracking, a calendar view, and interactive breathing exercises and disease prediction using machine learning.


## Features
- **Disease Prediction**: Machine learning-based prediction of potential diseases based on mood and sleep data, helping users identify early warning signs of health issues.
- **Mood Logger**: Users can log their mood with various parameters such as stress, happiness, energy, focus, and calmness.
- **Sleep Tracker**: Users can track their sleep duration and quality, with suggestions based on their input.
- **Mood Graph**: Visual representation of mood over time.
- **Sleep Graph**: Visual representation of sleep data over time.
- **Calendar Integration**: Users can view their mood and sleep data on a calendar.
- **Breathing Game**: An interactive breathing exercise to help users relax.
- **Contact Us**: A form for users to reach out for support or inquiries.


## Installation

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud)

### Clone the repository

```bash
git clone https://github.com/chaudharijay/swasthya.git
cd swasthya
```

### Install dependencies

**For the frontend:**

```bash
cd frontend
npm install
```

**For the backend:**

```bash
cd backend
npm install
```
**For the AI model:**

```bash
cd ai
pip install -r requirements.txt
```

### Environment Variables

Create a `.env` file in the backend directory and add the following variables:

```bash
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
GMAIL=your_gmail
APP_PASSWORD= # for reset password you will need to generate an [app password] for your gmail account in google settings
```

Create a `.env` file in the frontend directory and add the following variables:

```bash
VITE_REACT_APP_API_KEY=
VITE_REACT_APP_AUTH_DOMAIN=
VITE_REACT_APP_PROJECT_ID=
VITE_REACT_APP_STORAGE_BUCKET=
VITE_REACT_APP_MESSAGING_SENDER_ID=
VITE_REACT_APP_APP_ID= 
VITE_REACT_APP_MEASUREMENT_ID=
VITE_REACT_APP_API_HOST=http://localhost:5000
# go to firebase create project and get all these details
```

### Running the Application

**Start the backend server:**

```bash
cd backend
nodemon app.js
```

**Start the frontend application:**

```bash
cd frontend
npm run dev
```

**Start the AI model:**
```bash
cd ai
python app.py
```
# open 3 different terminals and run the above commands in each terminal.

## Usage
1. Navigate to the application in your browser.
2. Sign up or log in to your account.
3. Use the mood logger to record your mood.
4. Track your sleep patterns and view insights.
5. Explore the calendar and graph features.
6. Use the breathing game for relaxation.


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
