import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { TStore } from "../store";
import { test } from "../action";

import logo from './logo.svg';

import "./App.css";

interface IProps {
  testlog: string;
  test: any;
}

class App extends React.PureComponent<IProps> {
  render() {
    const { testlog, test } = this.props
    console.log(testlog);
    test();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/component/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (store: TStore) => {
  return {
    testlog: store.state.testlog,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TStore, void, AnyAction>
) => ({
  test: () => {
    dispatch(test());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
