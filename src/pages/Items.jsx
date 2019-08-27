import React from "react";

import { observer, inject } from "mobx-react";

@inject("itemStore")
@observer
class Items extends React.Component {
  handleChange = e => {
    this.props.itemStore.filter = e.target.value;
  };
  render() {
    let { filter, filterItem } = this.props.itemStore;
    return (
   
   <div className="searchFilter">
        <label >Search</label>
        <input value={filter} id="searchFilter" onChange={this.handleChange} />
        
        {filterItem.length === 0 && <div className="noResults">No results found</div>}
        <ul>{filterItem.map(item => <li key={item.name}><strong>{item.name}</strong>{item.description}</li>)}</ul>
      </div>
    );
  }
}


export default Items;
