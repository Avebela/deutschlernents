import React from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// import {
//     ActionCreator,
//     ActionCreatorsMapObject,
//     AsyncThunk,
//     bindActionCreators,
//   } from "@reduxjs/toolkit";
//   import { useMemo } from "react";
//   import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
//   import { AppDispatch, RootStore } from "./types";

//   // ERROR! use correct versions
//   export const useAppDispatch = useDispatch<AppDispatch>;
//   export const useStateSelector: TypedUseSelectorHook<RootStore> = useSelector;

//   export const useActionCreators = (actions: ActionCreatorsMapObject) => {
//     const dispatch = useAppDispatch();

//     return useMemo(() => bindActionCreators(actions, dispatch), []);
//   };
