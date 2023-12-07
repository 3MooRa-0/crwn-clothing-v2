import { createSelector } from "reselect";

import { RootState } from "../store";

import { UserState } from "./user.reducer";

export const SelectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  SelectUserReducer,
  (user) => user.currentUser
);
