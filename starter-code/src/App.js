import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import data from './data';
import ProductTable from "./components/ProductTable";

class App extends Component {
    constructor(){
        super();
        this.state = {
            data:data
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar/>

        <ProductTable data={this.state.data}/>
      </div>
    );
  }
}

export default App;
