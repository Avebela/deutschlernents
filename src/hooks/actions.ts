import { githubActions } from "./../store/github/github.slice";
//import {typeActions} from "./../store/type/typeSlice"
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const actions = {
  ...githubActions,
  // ...typeActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
