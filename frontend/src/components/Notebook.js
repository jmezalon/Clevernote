import React, { Component } from 'react';
import axios from "axios";
import { NotebookMidSec } from './midSection/NotebookMidSec';

class Notebooks extends Component {
  state = {
    notebooks: [],
    selection: {}
  }

  handleClick = (event) => {
    const selectednotebook = this.state.notebooks.find(notebook => {
      return notebook.id === parseInt(event.target.dataset.notebook_id)
    })

    this.setState({
      selection: selectednotebook
    })
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
        <NotebookMidSec notebooks={this.state.notebooks} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default Notebooks;
