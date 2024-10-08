
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

## Setting up Insominia (To test API endpoint)
1. **Download it** https://updates.insomnia.rest/downloads/mac/latest?app=com.insomnia.app&source=website
2. **Add it to you apps & Click on it**
3. **Watch this video**  https://psu.mediaspace.kaltura.com/media/Settiing+up+Insominia/1_x7tozrn9


Run backend
```
  python app.py
```
