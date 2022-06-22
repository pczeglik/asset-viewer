import React, { useContext } from 'react'

import { ASSET_CATEGORIES } from '../common/constants'
import { AssetStateDataContext } from '../contexts/AssetStateContext'
import { UIFactory } from '../factories/UIFactory'
import AppController from '../AppController'

export function ButtonsUI() {
    const { dispatch } = useContext(AssetStateDataContext);

    function onClick(category) {
        return () => {
            dispatch(AppController.getAsset(category))
        }
    }

    return (
        <div className="buttons-ui">
            {ASSET_CATEGORIES.map(category => {
                return UIFactory.createButton({ category, onClick: onClick(category) })
            })}
        </div>
    )
}