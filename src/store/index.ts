import { githubReducer } from "./github/github.slice";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // экспорт по умолчанию, поэтому называем как хотим
import typeReducer from "./type/typeSlice"; // экспорт по умолчанию, поэтому называем как хотим
import { typeApi } from "./type/typeApi";
import { githubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
    github: githubReducer,
    todos: todoReducer,
    types: typeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware, typeApi.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
