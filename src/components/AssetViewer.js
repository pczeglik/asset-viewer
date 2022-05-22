import { useContext, useEffect } from 'react'
import { compareState, states } from '../common/stateMachine'
import { AssetStateDataContext } from '../contexts/AssetStateContext'
import AppController from '../AppController'
import { LOGO_SRC } from '../common/constants'

export function AssetViewer() {
    const { assetState, dispatch } = useContext(AssetStateDataContext)

    useEffect(() => {
        (function() {
            dispatch(AppController.getRandomAsset())
        }())
    }, [])

    return (
        <>
            {compareState(assetState.state, states.idle) && <AssetEmpty />}
            {compareState(assetState.state, states.isLoading) && <AssetLoading />}
            {compareState(assetState.state, states.hasLoaded) && <AssetLoaded src={assetState.url} />}
            {compareState(assetState.state, states.hasError) && <AssetError error={assetState.error} />}
        </>
    )
}

function AssetLoaded({ src }) {
    return (
        <div className="asset-viewer asset-viewer-loaded">
            <img src={src} alt='viewer asset' />
        </div>
    )
}

function AssetEmpty() {
    return <div className="asset-viewer asset-viewer-empty">EMPTY</div>
}

function AssetLoading() {
    return (
        <div className="asset-viewer asset-viewer-loading">
            <img src={LOGO_SRC} alt='viewer asset' />
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