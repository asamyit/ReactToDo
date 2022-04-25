import React, { Component } from 'react'

export default class FunctionComponent extends Component {
  state = {
    myList : []
  }
  
  AddList = ()=>{
    const list = document.getElementById('listInput').value
    this.state.myList.push(list)
    this.setState({
      myList : this.state.myList
    })
  }
  
  ClearList = ()=>{
    this.setState({
      myList : []
    })
  }
  render() {
    return (
      <div>
        <h1>My List</h1>
        <button onClick={this.ClearList}>Clear List</button>
        <h3>
          <ul>
            {this.state.myList.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
        </h3>
        <input 
          type="text"
          id ="listInput"
        /><br />
        <button onClick={this.AddList}>Add List</button>
      </div>
    )
  }
}

