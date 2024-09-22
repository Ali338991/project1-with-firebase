import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const cartReducer = persistReducer(persistConfig, UserSlice.reducer);
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
