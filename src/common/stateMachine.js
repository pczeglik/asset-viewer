import { ACTION_TYPES } from "./constants"

export const states = {
    idle: 'idle',
    isLoading: 'isLoading',
    hasLoaded: 'hasLoaded',
    hasError: 'hasError'
}

const transitions = {
    [states.idle]: {
        [ACTION_TYPES.FETCH_ASSET]: states.isLoading,
    },
    [states.isLoading]: {
        [ACTION_TYPES.FETCH_ASSET_SUCCESS]: states.hasLoaded,
        [ACTION_TYPES.FETCH_ASSET_FAILURE]: states.hasError,
    },
    [states.hasLoaded]: {
        [ACTION_TYPES.FETCH_ASSET]: states.isLoading,
    },
    [states.hasError]: {
        [ACTION_TYPES.FETCH_ASSET]: states.isLoading,
    }
}

export function transition(currentState, action) {
    const nextState = transitions[currentState][action]
    return nextState || currentState
}

export function compareState(currentState, state) {
    return currentState === state;
}