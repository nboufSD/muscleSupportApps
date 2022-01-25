import { reducerWithInitialState } from "typescript-fsa-reducers";

import {
  testAction,
} from "./action";

export interface IState {
  testlog: string;
}

const initialState: IState = {
  testlog: "",
};

export const reducer = reducerWithInitialState(initialState)
  .case(testAction.done, (state, { result }) => {
    const { testlog } = result;
    return Object.assign({}, state, { testlog: testlog });
  })
