// The main config file for the project. Meant to keep all keys involved secure and off git.
const config = {};

config.keys = {};

// Spotify API Keys
config.keys.client_id = '*** YOUR CLIENT ID HERE***'; // Your client id
config.keys.client_secret = '*** YOUR CLIENT SECRET HERE***'; // Your secret
config.keys.redirect_uri = 'http://localhost:8888/callback'; // Default redirect uri

module.exports = config;
