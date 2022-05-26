import React, { useEffect } from 'react';
import '../styles/App.css'

import { AssetStateDataProvider } from '../contexts/AssetStateContext'
import { AssetViewer } from '../components/AssetViewer'
import { ButtonsUI } from '../components/ButtonsUI'

import { subscribe } from '../common/pubsub'
import { ChangeCategoryEvent } from '../common/events'

import AppController from '../AppController';

function App() {
    const subscriptionHandler = subscribe(ChangeCategoryEvent, (category, dispatch) => {
        AppController.getAsset(category)(dispatch)
    })

    useEffect(() => {
        return () => {
            subscriptionHandler.unsubscribe()
        }
    })

    return (
        <AssetStateDataProvider>
            <AssetViewer />
            <ButtonsUI />
        </AssetStateDataProvider>
    );
}

export default App;
