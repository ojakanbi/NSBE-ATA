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

### Create Python Environment and Activate

```bash
# Create Virtual Environment
python -m venv venv

# Activate Virtual Environment (macOS/Linux)
source venv/bin/activate
```

### Install Dependencies
```bash
pip install -r requirements.txt
```


## Set Up .env File

1. **Create a .env file**: Place this file in the root directory of your project.

2. **Copy .envexample content**: Copy the content from `.envexample` into `.env`.

   Example `.envexample` content:

3. **Modify variables**: Adjust the values in `.env` as needed for your environment and application configuration.

Ensure that the `.env` file is included in your project's version control `.gitignore` to keep sensitive information secure.



## Install MongoDB

### For macOS Users

```bash
# Tap MongoDB Brew Formula
brew tap mongodb/brew

# Install MongoDB Community Edition
brew install mongodb-community@5.0

# Start MongoDB Service
brew services start mongodb/brew/mongodb-community@5.0

# Verify MongoDB Service Status
brew services list
```
### For Other Operating Systems

Follow MongoDB installation instructions suitable for your OS.

## Setting Up MongoDB Compass

1. **Download MongoDB Compass** from [MongoDB Download Center](https://www.mongodb.com/try/download/compass).

2. **Launch MongoDB Compass** and connect to your MongoDB instance.

3. **Create a New Database** named `nsbe-ata`.

4. **Create a Collection** named `nsbe`.

5. **Import Sample Data** from `db-test.json` into the `nsbe` collection for testing.



Run backend
```
  python app.py
```

