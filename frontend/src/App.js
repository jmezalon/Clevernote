import React, { Component } from 'react';
import {Sidebar} from './components/Sidebar';
import AllNotes from './components/AllNotes';
import Trash from './components/Trash.js';
import Notebooks from './components/Notebook.js';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import { Writingsection } from './components/textboxSection/WritingSection';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    user: [],
    notes: [],
    selection: {},
    newnote: {},
    notebooks: [],
    notebookSelection: {},
    loggedIn: false
  }

//////////////

handleNotebookClick = (event) => {
  const selectednotebook = this.state.notebooks.find(notebook => {
    return notebook.id === parseInt(event.target.dataset.notebook_id)
  })

  this.setState({
    notebookSelection: selectednotebook
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


/////////////


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
  }
  render() {
    return (
      <div className={ this.state.loggedIn ? "App" : "SignIn"}>

        {this.state.loggedIn ? <Sidebar  logoutUser={this.logoutUser} user={this.state.user} /> : ""}
          <Switch>
            <Route exact path="/signup" render={(props) => <SignUp {...props} signUpUser={this.signUpUser} loginUser={this.loginUser} /> } />
            <Route exact path="/signin" render={(props) => <SignIn {...props} loginUser={this.loginUser} /> } />
            {this.state.loggedIn ? <Route exact path="/notes" render={(props) => <AllNotes handleClick={this.handleClick}
            noteSetting={this.noteSetting}
            notetoedit={this.state.selection}
            editNote={this.editNote}
            notes={this.state.notes}
            selection={this.state.selection}
           /> } /> : <Redirect to="signin" />}
            <Route exact path="/new" render={this.renderNewNote} />
            <Route exact path="/notebooks/2/notes" component={Trash} />
            <Route exact path="/notebooks" render={(props) => <Notebooks {...props} notebooks={this.state.notebooks}
            handleNotebookClick={this.handleNotebookClick} /> } />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
