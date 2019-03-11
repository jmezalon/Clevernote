import React, { Component } from 'react';
import {Sidebar} from './components/Sidebar';
import AllNotes from './components/AllNotes';
import Trash from './components/Trash.js';
import Notebooks from './components/Notebook.js';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Writingsection from './components/textboxSection/WritingSection';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    user: [],
    notes: [],
    noteSearch: "",
    selection: {},
    newnote: {},
    notebooks: [],
    foundNotes: "",
    loggedIn: false,
    noteFound: false
  }




//////////// notebooks network request




getAllNotebooks = () => {
  let userid = parseInt(this.state.user.id)
axios.get(`/notebooks/${userid}`)
.then(res => {
  this.setState({
    notebooks: res.data.notebooks
  })
})
}

createNotebook = (notebook) => {
  let userId = parseInt(this.state.user.id)
  axios.post(`/notebooks/${userId}`, {notebook_type: notebook})
  .then(res => {
    this.setState({
      notebooks: [res.data.notebook, ...this.state.notebooks]
    })
  })
  .catch(err => {
    console.log("notebook network err", err);
  })
}



/////////////


  getAllNotes = () => {
    let userid = parseInt(this.state.user.id)
    axios.get(`/notes/${userid}`)

    .then(res => {
      this.getAllNotebooks()
      this.setState({
        notes: res.data.notes
      })
    }).catch(err => {
      console.log(err, 'notes err');
    })
  }

  editNote = (note) => {
    let notes = {
      title: this.state.selection.title,
      tag: this.state.selection.tag,
      body: this.state.selection.body,
      notebook_id: this.state.selection.notebook_id
    }
    let noteId = parseInt(this.state.selection.id)
    axios.patch(`/notes/${noteId}`,  notes )
    .then(res => {
      this.getAllNotes()
    })
    .catch(err => {
      console.log("post err", err);
    })
  }

  createNote = (note) => {
    let noteId = parseInt(this.state.user.id)
    axios.post(`/notes/${noteId}`,  note )
    .then(res => {
      this.getAllNotebooks()
      const notebook = this.state.notebooks.find(n => n.id === res.data.note.notebook_id);
      const newNote = {
        ...res.data.note,
        notebook_type: notebook.notebook_type
      }
      this.setState({
        notes: [
          ...this.state.notes,
          newNote
        ],
        noteFound: false
      })
    })
    .catch(err => {
      console.log("post err", err);
    })
  }

  signUpUser = (user) => {
    return axios.post('/users/signup', user)
    .catch(err => {
      console.log("creating user Error", err);
    })
  }

  loginUser = (email, password) => {
    return axios.post('/users/login', {
      email: email,
      password: password
    })
    .then(res => {

      this.setState({
        user: res.data,
        loggedIn: true
      })
      this.getAllNotes()
      this.getAllNotebooks()
      return true
    })
    .catch(err => {
       this.setState({
        loggedIn: false
      })
      return false
    })
  }

  logoutUser = () => {
    return axios.post('/users/logout')
    .then(res => {
      this.setState({
        loggedIn: false
      })
    })
    .then(res => this.props.history.push("/signin"))
    .catch(err => {
      console.log("logout err", err);
    })
  }

  handleNoteSearchChange = (e) => {
    this.setState({
      noteSearch: e.target.value
    })
  }

  handleNoteSearchSubmit = (e) => {
    e.preventDefault()
    this.setState({
      foundNotes: this.state.noteSearch, noteSearch: "", noteFound: !this.state.noteFound

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
       notes={this.state.notes}
       notebooks={this.state.notebooks}
       selection={this.state.selection}
       />
     )
   }



  componentDidMount() {
    this.getAllNotes()
    this.getAllNotebooks()
    // this.getAllNotesFromOneNotebook()
  }
  render() {

    const thenotes = this.state.notes.map(note => {
    if(note.title.toLowerCase().indexOf(this.state.foundNotes.toLowerCase()) === 0) {
      return (<div className="info" key={note.id}>title: {note.title} <br /> body: {note.body} <br /> tag: {note.tag} <br/>
      </div>)
    } else {
      return null
    }
  })

    return (
      <div className={ this.state.loggedIn ? "App" : "SignIn"}>
        {this.state.loggedIn ? <Sidebar  logoutUser={this.logoutUser} user={this.state.user} noteSearch={this.state.noteSearch} handleNoteSearchSubmit={this.handleNoteSearchSubmit} handleNoteSearchChange={this.handleNoteSearchChange} /> : ""}
          <Switch>
            <Route exact path="/signup" render={(props) => <SignUp {...props} signUpUser={this.signUpUser} loginUser={this.loginUser} /> } />
            <Route exact path="/signin" render={(props) => <SignIn {...props} loginUser={this.loginUser} /> } />
            {this.state.loggedIn ? <Route exact path="/notes" render={(props) => <AllNotes thenotes={thenotes} noteFound={this.state.noteFound}
            noteSearch={this.state.noteSearch}
            foundNotes={this.state.foundNotes} handleClick={this.handleClick}
            noteSetting={this.noteSetting}
            notebooks={this.state.notebooks}
            notetoedit={this.state.selection}
            editNote={this.editNote}
            notes={this.state.notes}
            selection={this.state.selection}
           /> } /> : <Redirect to="signin" />}
            <Route exact path="/new" render={this.renderNewNote} />
            <Route exact path="/notebooks/2/notes" component={Trash} />
            <Route exact path="/notebooks" render={(props) => <Notebooks {...props}
            user={this.state.user}
            notebooks={this.state.notebooks}
            createNotebook={this.createNotebook}
            getAllNotebooks={this.getAllNotebooks}
            getAllNotesFromOneNotebook={this.getAllNotesFromOneNotebook}

             /> } />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
