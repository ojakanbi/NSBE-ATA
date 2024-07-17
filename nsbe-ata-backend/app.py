import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_socketio import SocketIO, emit
import bcrypt
import qrcode
import datetime
from bson.objectid import ObjectId
from geopy.distance import geodesic



# Load environment variables from .env file
load_dotenv()


app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)
jwt = JWTManager(app)
socketio = SocketIO(app, cors_allowed_origins="*")
app.config["DEBUG"] = os.getenv("DEBUG")

@app.route('/', methods=['GET'])
def app_check():
    return jsonify({"status": "NSBE ATA Server is running"}), 200


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
    socketio.run(app, host='0.0.0.0', port=3000) # Run the server 