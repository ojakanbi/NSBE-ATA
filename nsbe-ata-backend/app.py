from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import bcrypt
import qrcode
import datetime
from bson.objectid import ObjectId
from geopy.distance import geodesic
import logging
from email_validator import validate_email, EmailNotValidError
import os
from dotenv import load_dotenv

# Custom logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Specify allowed origins
allowed_origins = [
    "https://nsbe-ata-frontend-h0clvgjdg-ojakanbis-projects.vercel.app",
    "https://nsbe-ata-frontend.vercel.app"
]

# Configure CORS to allow specified origins
CORS(app, resources={r"/*": {"origins": allowed_origins}})

if app:
    logging.info("\n🚀N\n🚀S\n🚀B\n🚀E\nBackend Server is UP and RUNNING")

app.config["MONGO_URI"] = os.getenv("MONGO_URI")
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

mongo = PyMongo(app)
jwt = JWTManager(app)
socketio = SocketIO(app, cors_allowed_origins=allowed_origins)
app.config["DEBUG"] = os.getenv("DEBUG")

@app.route('/', methods=['GET'])
def app_check():
    return jsonify({"status": "NSBE ATA Server is running"}), 200

# Register user endpoint 
@app.route('/register', methods=['POST'])
def register():
    data = request.json

    logging.info("DATA: ", data)
    
    # Ensure required fields are provided
    required_fields = ["nsbe_id", "first_name", "last_name", "email", "password", "role"]
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    try:
        valid = validate_email(data["email"])
        email = valid.email
        if not email.endswith("psu.edu"):
            raise EmailNotValidError
    except EmailNotValidError:
        logging.warning(f"Invalid email domain attempt: {data['email']}")
        return jsonify({"error": "Invalid email domain, must be a 'psu.edu' email"}), 400

    # Validate password complexity
    password = data["password"]
    if len(password) < 8 or not any(c.isdigit() for c in password) or not any(c.isalpha() for c in password):
        return jsonify({"error": "Password must be at least 8 characters long and include both letters and numbers."}), 400
    
    try:
        # Check if the user already exists
        if mongo.db.users.find_one({"email": data["email"]}):
            logging.info(f"{data['email']} already registered")
            return jsonify({"error": "Email already registered"}), 400
            
        if mongo.db.users.find_one({"nsbe_id": data["nsbe_id"]}):
            logging.info(f"{data['nsbe_id']} already in DB")
            return jsonify({"error": "NSBE ID already registered"}), 400
        
        # Hash the password
        hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())

        # Create user object
        user = {
            "nsbe_id": data["nsbe_id"],
            "first_name": data["first_name"],
            "last_name": data["last_name"],
            "email": data["email"],
            "password": hashed_password,
            "role": data["role"],  # Admin or member
            "year": "",
            "points": 0,
            "location": "",
            "registration_date": datetime.datetime.utcnow()
        }

        # Insert the user into the 'users' collection
        mongo.db.users.insert_one(user)
        access_token = create_access_token(identity={"email": data["email"], "role": data["role"]})

        logging.info(f"{data['first_name']} registered successfully")
        return jsonify({"message": "User registered successfully", "access_token": access_token}), 201
    except Exception as e:
        logging.error(f"Error registering user: {str(e)}")
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

# TEST YOUR DB | Will delete this soon 
@app.route('/data')
def db_test():
    collection = mongo.db.nsbe
    data = list(collection.find())  # Fetch all documents from 'nsbe' collection
    print("this is collect ion" , collection)
    # Convert ObjectId to string for JSON serialization
    for entry in data:
        entry['_id'] = str(entry['_id'])
    
    return jsonify({"data": data}), 200


if __name__ == '__main__':
    try:
        logging.info("Connecting to MongoDB...")
        mongo.db.command("ping")  # Ping MongoDB to check connection
        logging.info("MongoDB connection successful")
    except Exception as e:
        logging.error(f"MongoDB connection error: {str(e)}")
    socketio.run(app, host='0.0.0.0', port=3001)  # Run the server 
