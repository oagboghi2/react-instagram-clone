import React, { Component } from 'react';
import dummyData from './dummy-data';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/searchbar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data : []
    };
  }

  componentDidMount(){
    console.log(dummyData);
    this.setState({data: dummyData}); //take data from Dummydata and adds it to state under data array
  }


  render() {
    console.log("data", this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar DataProps={this.state.data} />
        <PostContainer DataProps={this.state.data} />
        <CommentSection DataProps={this.state.data} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
