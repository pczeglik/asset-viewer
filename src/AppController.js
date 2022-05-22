import { API } from './services/api'
import { ACTION_TYPES, ASSET_CATEGORIES } from './common/constants'
import { getRandomElement } from './common/utils'

export class AppController {
    constructor(api) {
        this.api = api
    }

    getAsset(category) {
        return async dispatch => {
            dispatch({ type: ACTION_TYPES.FETCH_ASSET, payload: { category }})
            try {
                const asset = await this.api.getAsset(category)
                dispatch({ type: ACTION_TYPES.FETCH_ASSET_SUCCESS, payload: { url: asset.url }})
            } catch (error) {
                console.log(error);
                dispatch({ type: ACTION_TYPES.FETCH_ASSET_FAILURE, payload: { error: error.message }})
            }
        }
    }

    getRandomAsset() {
        const randomCategory = getRandomElement(ASSET_CATEGORIES)

        return async dispatch => {
            dispatch({ type: ACTION_TYPES.FETCH_ASSET, payload: { category: '' }})
            try {
                const asset = await this.api.getAsset(randomCategory)
                dispatch({ type: ACTION_TYPES.FETCH_ASSET_SUCCESS, payload: { url: asset.url }})
            } catch (error) {
                console.log(error);
                dispatch({ type: ACTION_TYPES.FETCH_ASSET_FAILURE, payload: { error: error.message }})
            }
        }
    }
}

export default new AppController(API)
