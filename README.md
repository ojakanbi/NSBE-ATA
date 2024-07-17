# NSBE Attendance Tracking Application (ATA)

## Project Overview

The NSBE Attendance Tracking Application (ATA) is designed to simplify the process of recording attendance at events organized by organizations like NSBE. This application utilizes QR codes for attendance tracking, along with real-time authentication and GPS location verification to ensure accurate attendance records. Additionally, members will be prompted to answer a set of questions each time they scan the QR code.

### Repository

Visit the [NSBE-ATA GitHub Repository](https://github.com/ojakanbi/NSBE-ATA) for detailed code and documentation.

## Requirements

- **User Authentication:** Secure user authentication using JWT.
- **Event Creation:** Ability to create events with relevant details.
- **QR Code Generation:** Automatically generate QR codes for events.
- **QR Code Scanning:** Utilize QR code scanning to mark attendance.
- **Real-time Communication:** Incorporate real-time features for instant updates.
- **GPS Location Verification:** Validate attendance through GPS location.
- **User Roles:** Admin and member roles for managing events and attendance.
- **Secure Data Handling:** Ensure secure handling and storage of sensitive data.
- **Question Prompt:** Prompt members to answer specific questions during QR code scanning.

## Tech Stack

- **Frontend:** Next.js for dynamic frontend development (HTML, CSS, JavaScript).

## Getting Started 
Create Python env and activate 
- python -m venv venv
- source venv/bin/activate 

Install all dependencies via requirements.txt
- pip install -r requirements.txt

Set Up .env file via .envexample

Install Database Mongo db | Read doc(Ben) or if mac user  
- brew tap mongodb/brew
- brew install mongodb-community@5.0
- brew services start mongodb/brew/mongodb-community@5.0 
- brew services list
- Download MongoCompass https://www.mongodb.com/try/download/compass
- Db name = "nsbe-ata" collection name = 'nsbe'
- import the "db-test.json" file into MongoCompass for db test


Run backend
- python app.py

