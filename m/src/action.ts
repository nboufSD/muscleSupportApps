import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { actionCreatorFactory } from "./node_modules/typescript-fsa";

import { IState } from "./reducer";
import { store, TStore } from "./store";

const actionCreator = actionCreatorFactory();

export const testAction = actionCreator.async<
  {},
  { testlog: string },
  { error: any }
>("TOGGLE_AUDIO_MUTING");

export function test() {
    return async (
      dispatch: ThunkDispatch<TStore, void, AnyAction>,
      getState: () => TStore
    ) => {
      const params = {};

      try {
        dispatch(testAction.started(params));

        const state = getState()?.state;
        console.log(state);

        const result = { testlog: "test" };

        dispatch(testAction.done({ result, params }));
      } catch (error) {
        dispatch(testAction.failed({ error: {error}, params }));
      }
    };
  }