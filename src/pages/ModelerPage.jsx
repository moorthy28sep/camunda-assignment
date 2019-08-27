import React, { Component } from "react";
import BpmnBoard from '../containers/BpmnBoard';
export default class ModelerPage extends Component {
  render() {
    return (
      <div className="content">
        <h1>Modeler</h1>
        <div className="mod">
          <BpmnBoard />
        </div>
      </div>
    );
  }
}
