import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

/* Query Slice */

interface QueryState {
  sqlQuery: string;
}

const queryInitialState: QueryState = {
  sqlQuery: "",
};

const querySlice = createSlice({
  name: "query",
  initialState: queryInitialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.sqlQuery = action.payload;
    },
    clearQuery: (state) => {
      state.sqlQuery = "";
    },
  },
});

/* User Slice */

interface UserState {
  name: string;
  avatar: string;
}

const userInitialState: UserState = {
  name: "Alex Developer",
  avatar: "https://i.pravatar.cc/40",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<UserState>
    ) => {
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    },
  },
});

/* Exports */

export const { setQuery, clearQuery } =
  querySlice.actions;

export const { setUser } =
  userSlice.actions;

/* Store */

export const store = configureStore({
  reducer: {
    query: querySlice.reducer,
    user: userSlice.reducer,
  },
});

/* Types */

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;