import { states, transition } from './stateMachine';
import { ACTION_TYPES } from './constants'

test('allow transition from idle to isLoading', () => {
  expect(transition(states.idle, ACTION_TYPES.FETCH_ASSET)).toEqual(states.isLoading);
});

test('do not allow transition from idle to hasLoaded', () => {
    expect(transition(states.idle, ACTION_TYPES.FETCH_ASSET_SUCCESS)).toEqual(states.idle);
})
