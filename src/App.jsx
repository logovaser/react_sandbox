import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      kek: 'kek'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log(this.state);
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input onChange={this.handleChange}/>
        </div>
        <button type="submit">SAVE</button>
      </form>
    </div>);
  }
}

export default App;
