import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { appReducer, sitesReducer } from './reducers/index';

const configureCustomStore = () => {
  const rootReducer = combineReducers({
    app: appReducer,
    sites: sitesReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

  return { store };
};

export const { store } = configureCustomStore();
