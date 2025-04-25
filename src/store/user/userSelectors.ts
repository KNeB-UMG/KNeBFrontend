import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const userSelector = (state: RootState) => state.user;

export const userPermissionsSelector = createSelector(
    userSelector,
    (userState) => userState.user?.permissions ?? []
  );