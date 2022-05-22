import React, { useReducer } from 'react'
import { ACTION_TYPES } from '../common/constants'
import { states, transition } from '../common/stateMachine'

function assetStateReducer (assetState, action) {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ASSET:
            return { ...assetState, state: transition(assetState.state, ACTION_TYPES.FETCH_ASSET)}

        case ACTION_TYPES.FETCH_ASSET_SUCCESS:
            return { 
                ...assetState, 
                state: transition(assetState.state, ACTION_TYPES.FETCH_ASSET_SUCCESS),
                url: action.payload.url,
            }

        case ACTION_TYPES.FETCH_ASSET_FAILURE:
            return {
                ...assetState,
                state: transition(assetState.state, ACTION_TYPES.FETCH_ASSET_FAILURE),
                error: action.payload.error,
            }

        default:
            return assetState
    }
}

export const AssetStateDataContext = React.createContext()

export const AssetStateDataProvider = ({ children }) => {
    const [assetState, dispatch] = useReducer(assetStateReducer, {
        url: '',
        state: states.idle
    })

    const thunkDispatch = React.useCallback(
        (action) => typeof action === 'function'
            ? action(dispatch)
            : dispatch(action)
        , []
      )

      return (
        <AssetStateDataContext.Provider
          value={{ assetState, dispatch: thunkDispatch }}
        >
          {children}
        </AssetStateDataContext.Provider>
      );
}
