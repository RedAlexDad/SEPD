import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import PostList from './components/PostList';
import PostFrom from './components/PostFrom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostFrom> </PostFrom>
        {/* <PostList></PostList> */}
      </div>
    );
  }
}

export default App;
