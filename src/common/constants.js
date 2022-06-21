const ASSET_CATEGORIES = ['Cat', 'Dog', 'Lion', 'Elephant', 'Monkey']
const API_URL = 'https://api.giphy.com/v1/gifs/random'
const API_KEY = 'your-api-key'

const ACTION_TYPES = {
    FETCH_ASSET: 'FETCH_ASSET',
    FETCH_ASSET_SUCCESS: 'FETCH_ASSET_SUCCESS',
    FETCH_ASSET_FAILURE: 'FETCH_ASSET_FAILURE',
}

export {
    ACTION_TYPES,
    ASSET_CATEGORIES,
    API_KEY,
    API_URL,
}
