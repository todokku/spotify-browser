# Spotify Browser
Note: This project was created just for technical training.

## Setup
### Install dependencies
```
bundle
yarn --cwd client install
```

### Add alias in your hosts file
Update your `/etc/hosts` file with the next line
```
127.0.0.1 app.spotify.test
```

### Setup one spotify app
Follow [this guide](https://developer.spotify.com/documentation/general/guides/app-settings/) to setup one spotify app and ensure to add `http://app.spotify.test:3000/auth_callback` in your **Redirect URIs** section.

### Set environment variables
```
echo "SPOTIFY_CLIENT_ID='your spotify client id'" >> .env
echo "SPOTIFY_CLIENT_SECRET_ID='your spotify client secret id'" >> .env
echo "SPOTIFY_URL=https://accounts.spotify.com" >> .env
echo "SPOTIFY_APP_URL=http://app.spotify.test:3000" >> .env
echo "HOST=app.spotify.test" >> client/.env
echo "BROWSER=none" >> client/.env
```

## Run app
```
bin/rake start
```
Navigate to http://app.spotify.test:3000

## Run tests
### Client
```
yarn --cwd client test --watchAll=false
```

### API
```
bin/rake
```
