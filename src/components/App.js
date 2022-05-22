import React from 'react';
import '../styles/App.css'

import { AssetStateDataProvider } from '../contexts/AssetStateContext'
import { AssetViewer } from '../components/AssetViewer'
import { ButtonsUI } from '../components/ButtonsUI'

function App() {
    return (
        <AssetStateDataProvider>
            <AssetViewer />
            <ButtonsUI />
        </AssetStateDataProvider>
    );
}

export default App;
