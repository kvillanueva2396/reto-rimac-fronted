import { Constants } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appStore',
  initialState: {
    currentStep: Constants.APPLICATIONS_STEPS.LOGIN,
  },
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = appSlice.actions;

export default appSlice.reducer;
