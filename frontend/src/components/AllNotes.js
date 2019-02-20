import React, { Component } from 'react';
import axios from 'axios';
import { AllNotesMidSec } from './midSection/AllNotesMidSec';
import { NoteDisplay } from './NoteDisplay'


class AllNotes extends Component {
  state = {
    notes: [],
    title: "",
    body: "",
    tag: ""
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


  handleSubmit = (e) => {
    e.preventDefault()

    const newNote = {
      title: this.state.title,
      body: this.state.body,
      tag: this.state.tag,
    };

    axios.post("/notes", { newNote })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.getAllNotes()
  }

  render() {
    return (
      <div className='allnotes'>
        <AllNotesMidSec notes={this.state.notes} />
        <NoteDisplay notes={this.state.notes} />
      </div>
    )
  }
}

export default AllNotes;
