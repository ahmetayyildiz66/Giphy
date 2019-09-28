const baseUrl = 'https://api.giphy.com/v1/gifs/';
const searchType = {
    trending: 'trending',
    search: 'search'
}
const parameters = {
    query: '&q=',
    limit: '&limit=',
    rating: '&rating=G',
    size: 20
}

const apiKey = '?api_key=JESzJ2z16TUhG1RQOVTs1h21nztW6Pqy';


module.exports = {
    parameters , baseUrl, searchType, apiKey
};

