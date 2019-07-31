import React, { Component } from 'react';
import Shoes from './components/Shoes';
import './App.css';

const BACKEND_TOKEN = '30d79434595e8de46e7815f0dc31339ed44e6179'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    };
  }
  
  componentDidMount() {
    fetch('http://127.0.0.1:8000/shoes/?token='+BACKEND_TOKEN)
      .then(res => res.json())
      .then((data) => {
        this.setState({ shoes: data.data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <Shoes shoes={this.state.shoes} />
    )
  }

}

export default App;