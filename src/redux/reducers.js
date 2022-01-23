import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter/reducer';
import companyListReducer from './companyList/reducer';

const rootReducer = combineReducers({
    filterData: filterReducer,
    companyList: companyListReducer
})

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: 'aqR_iViuhaG2UgLQKFEAXtd20_coVZb-rGpXqy_p2-EThoXlaEIFm-Nl_6oVSR3IcCzIwZ7VqOClc4Mu1h1VA',
            onError: function (error) {
                // Handle the error.
            },
        }),
    ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);

export const persistor = persistStore(store)

export default { store, persistor };