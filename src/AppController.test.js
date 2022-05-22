import { AppController } from "./AppController";

test('AppController: getAsset success', async () => {
    const dispatch = jest.fn()
    const API = { getAsset: jest.fn(() => ({ url: 'sample-url' }))}
    const appController = new AppController(API)

    await appController.getAsset('cat')(dispatch);

    expect(dispatch).toBeCalledWith({ type: 'FETCH_ASSET', payload: { category: 'cat' }})
    expect(dispatch).toBeCalledWith({ type: 'FETCH_ASSET_SUCCESS', payload: { url: 'sample-url' }})
});
