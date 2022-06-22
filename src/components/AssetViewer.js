import { useCallback, useContext, useEffect } from 'react'
import { compareState, states } from '../common/stateMachine'
import { AssetStateDataContext } from '../contexts/AssetStateContext'
import { UIFactory } from '../factories/UIFactory'
import AppController from '../AppController'

export function AssetViewer() {
    const { assetState, dispatch } = useContext(AssetStateDataContext)

    const dispatchRandomAsset = useCallback(() => {
        dispatch(AppController.getRandomAsset())
    }, [dispatch])

    useEffect(() => {
        dispatchRandomAsset()
    }, [dispatchRandomAsset])

    return (
        <div data-testid="asset-viewer">
            {compareState(assetState.state, states.idle) && <AssetEmpty />}
            {compareState(assetState.state, states.isLoading) && <AssetLoading />}
            {compareState(assetState.state, states.hasError) && <AssetError error={assetState.error} />}
            {compareState(assetState.state, states.hasLoaded) && <AssetLoaded src={assetState.url} />}
        </div>
    )
}

function AssetEmpty() {
    return <div className="asset-viewer asset-viewer-empty">EMPTY</div>
}

function AssetLoading() {
    return (
        <div className="asset-viewer asset-viewer-loading">
            LOADING...
        </div>
    )
}

function AssetError({ error }) {
    return (
        <div className="asset-viewer asset-viewer-error">
           <h1>ERROR</h1>
           <div>{error}</div>
        </div>
    )
}

function AssetLoaded({ src }) {
    return (
        <div className="asset-viewer asset-viewer-loaded">
            {UIFactory.createImg({ src: src, altText: 'asset viewer' })}
        </div>
    )
}
