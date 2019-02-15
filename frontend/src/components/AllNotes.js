import React, { Component } from 'react';
import axios from 'axios';
import { AllNotesMidSec } from './midSection/AllNotesMidSec';
import { Writingsection } from './textboxSection/WritingSection';


class AllNotes extends Component {
  state = {
    notes: []
  }

  getAllNotes = () => {
    axios.get("/notes")
    .then(res => {
      this.setState({
        notes: res.data.notes
      })
    }).catch(err => {
      console.log(err, 'notes err');
    })
  }

  componentDidMount() {
    this.getAllNotes()
  }

  render() {
    return (
      <div className='allnotes'>
        <AllNotesMidSec notes={this.state.notes} />
        <Writingsection />
      </div>
    )
  }
}

export default AllNotes;
