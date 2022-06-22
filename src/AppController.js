import { API } from './services/api'
import { ACTION_TYPES } from './common/constants'

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
}

export default new AppController(API)
