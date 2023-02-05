import { configureStore } from "@reduxjs/toolkit";
import formValuesSlice from "./formValuesSlice";

export const store = configureStore({
  reducer: {
    formValues: formValuesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
