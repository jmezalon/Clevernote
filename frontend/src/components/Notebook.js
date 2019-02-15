import React, { Component } from 'react';
import axios from "axios";
import { NotebookMidSec } from './midSection/NotebookMidSec';

class Notebooks extends Component {
  state = {
    notebooks: []
  }

getAllNotebooks = () => {
  axios.get('/notebooks')
  .then(res => {
    this.setState({
      notebooks: res.data.notebooks
    })
  })
}

componentDidMount() {
  this.getAllNotebooks()
}

  render() {
      return (
      <div className='thenotebooks'>
        <NotebookMidSec notebooks={this.state.notebooks} />
      </div>
    )
  }
}

export default Notebooks;
