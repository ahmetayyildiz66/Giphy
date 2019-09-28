const defaultSize = 20;
const url = 'https://api.giphy.com/v1/gifs/trending?api_key=JESzJ2z16TUhG1RQOVTs1h21nztW6Pqy&limit=';
const searchUrl = 'https://api.giphy.com/v1/gifs/search?api_key=JESzJ2z16TUhG1RQOVTs1h21nztW6Pqy&q=';
const limit = "&limit=";
const rating = '&rating=G';
module.exports.Singleton = {defaultSize, url, rating, searchUrl, limit};

