import { API_URL, API_KEY } from '../common/constants'
import { Asset } from '../models/Asset'

function normalizeCategoryName(categoryName) {
    return categoryName?.toLowerCase();
}

function fetchAsset(category) {
    const categoryName = normalizeCategoryName(category)
    const url = `${API_URL}?api_key=${API_KEY}&tag=${categoryName}&rating=g`

    return fetch(url).then(response => { 
        if (response.ok) {
            return response.json()
        }

        throw new Error('Error')
    })
}

function buildAsset(assetData, category) {
    const asset = new Asset()
    asset.setCategory(category)
    asset.setUrl(assetData.images.fixed_height_downsampled.url)

    return asset
}

export async function getAsset(category) {
    try {
        const { data: assetData } = await fetchAsset(category)
        return buildAsset(assetData, category)
    } catch(error) {
        throw new Error('Asset not exists')
    }
}

export const API = {
    getAsset,
}
