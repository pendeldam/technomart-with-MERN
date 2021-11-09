import { createReducer } from "@reduxjs/toolkit";
import {setConnectionStatus} from '../actions';
import { CONNECTION_STATUS} from '../../const';

const initialState = {
  isDataLoaded: CONNECTION_STATUS.WAIT,
};

export const appState = createReducer(initialState, (builder) => {
  builder
    .addCase(setConnectionStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
