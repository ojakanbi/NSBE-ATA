# NSBE-ATA
NSBE Attendance Tracking Application (ATA)


Project Overview 
The Attendance Tracking Application is designed to streamline the process of marking attendance for events organized by an organization like NSBE. The application uses QR codes for attendance marking, with real-time authentication and GPS location verification to ensure the integrity of the attendance records. Additionally, the application will prompt members to answer a set of questions every time they scan the QR code.

	Repo  - https://github.com/ojakanbi/NSBE-ATA


Req
User Auth, Event Creation, QR code Generation for Events, QR Code Scanning for Attendance, Real-time Communication, GPS location Verification, User Roles (Admin and Member), Secure Data Handling, Question Prompt on QR Code Scan.

Tech Stack 
Frontend: Next.js ( HTM, CSS, JS) 
Backend: Flask (python)
Database: MongoDB ( pyMongo ) 
Authentication: JWT (pyjwt)
QR Code Generation: (qrcode) lib
QR Code Scanning: react-qr-reader library
Real-time Features: Flask-SocketIO
GPS Location: HTML5 Geolocation API
