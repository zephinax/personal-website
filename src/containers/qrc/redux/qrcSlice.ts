import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./qrcStore";

export interface CounterState {
  text: string;
  isTyping: boolean;
}

const initialState: CounterState = {
  text: "qrc.io.vn",
  isTyping: false,
};

export const qrcSlice = createSlice({
  name: "qrc",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setIsTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
  },
});

export const { setText, setIsTyping } = qrcSlice.actions;

export const selectText = (state: RootState) => state.qrc.text;
export const selectIsTyping = (state: RootState) => state.qrc.isTyping;

export default qrcSlice.reducer;
