import React, { Component } from "react";
import Items from './Items';
import { render } from "react-dom";
import { ItemStore } from "./ItemStore";

import { Provider } from "mobx-react";


export default class FrameworksPage extends Component {
  render() {
    return (
      render(
        <Provider itemStore={store}>
          <Items itemStore={store}/>
        </Provider>,
        document.getElementById("search")
      )
    );
  }
}

let store = new ItemStore();
