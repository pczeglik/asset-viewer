import React, { useContext } from 'react'

import { ASSET_CATEGORIES } from '../common/constants'
import { AssetStateDataContext } from '../contexts/AssetStateContext'
import { UIFactory } from '../factories/UIFactory'

import { publish } from '../common/pubsub'
import { ChangeCategoryEvent } from '../common/events'

export function ButtonsUI() {
    const { dispatch } = useContext(AssetStateDataContext);

    function onClick(category) {
        return () => {
            publish(new ChangeCategoryEvent(category, dispatch))
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