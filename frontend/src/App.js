import React, { Component } from 'react';
import { Sidebar } from './components/Sidebar';
import AllNotes from './components/AllNotes';
import Trash from './components/Trash.js';
import Notebooks from './components/Notebook.js';
import { Writingsection } from './components/textboxSection/WritingSection';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    selection: {},
    newnote: {}
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

  createNote = (note) => {
    axios.post("/notes",  note )
    .then(res => {
      this.setState({
        notes: [...this.state.notes, res.data.note]
      })
    })
    .catch(err => {
      console.log("post err", err);
    })
  }



  handleClick = (event) => {
    const selectednote = this.state.notes.find(note => {
      return note.id === parseInt(event.target.dataset.note_id)
    })

    this.setState({
      selection: selectednote
    })
  }

  noteSetting = (note, notetype) => {
    this.setState({
      [notetype] : note
    })
  }

  renderNewNote = (props) => {
    // this.setState({newnote: {}})
      return (
       <Writingsection {...props}
       notetype="newnote"
       notetoedit={this.state.newnote}
       noteSetting={this.noteSetting} createNote={this.createNote}
       />
     )
   }


  componentDidMount() {
    this.getAllNotes()
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
          <Switch>
            <Route exact path="/notes" render={(props) => <AllNotes handleClick={this.handleClick}
            noteSetting={this.noteSetting}
            notetoedit={this.state.selection}
            createNote={this.createNote}
            notes={this.state.notes}
           /> } />
            <Route exact path="/new" render={this.renderNewNote} />
            <Route exact path="/notebooks/2/notes" component={Trash} />
            <Route exact path="/notebooks" component={Notebooks} />
          </Switch>
      </div>
    );
  }
}

export default App;
