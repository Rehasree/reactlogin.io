import React, { Component } from "react";
 
class Addmain extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
            
            <input placeholder="enter task">
            </input>
            <button type="submit">adding a memver
            </button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Addmain;