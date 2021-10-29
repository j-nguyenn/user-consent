import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import consentReducer from "../features/consent/consentSlice";
export const store = configureStore({
  reducer: {
    consent: consentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
