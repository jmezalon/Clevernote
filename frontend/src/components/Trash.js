import React, { Component } from 'react';
import axios from "axios";
import { TrashMidSec } from './midSection/TrashMidSec';

class Trash extends Component {
  state = {
    trashbin: []
  }

getAllTrash = () => {
  axios.get('/notebooks/2/notes')
  .then(res => {
    this.setState({
      trashbin: res.data.notes
    })
  })
}

componentDidMount() {
  this.getAllTrash()
}

  render() {
      return (
      <div className='alltrash'>
        <TrashMidSec trashbin={this.state.trashbin} />
      </div>
    )
  }
}

export default Trash;
