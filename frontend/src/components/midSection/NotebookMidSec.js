import React, { Component } from 'react';


export class NotebookMidSec extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notebookSelection: {},
      noteTitleList: [],
      notebooktitle: "",
      singleNotebookNotes: []
    }
  }

    handleNotebookClick = async (event) => {
      const selectednotebook = this.props.notebooks.find(notebook => {
        return notebook.id === parseInt(event.currentTarget.dataset.notebook_id)
      })
      await this.setState({
        notebookSelection: selectednotebook
      })
        // await this.getAllNotesFromOneNotebook()
        this.getNoteTitleList()
    }

     getNoteTitleList = () => {
       let noteTitleLists;
      if (this.state.singleNotebookNotes) {
        noteTitleLists = this.state.singleNotebookNotes.map((notes) => {
          return <li key={notes.id}>{notes.title}</li>
        })
      }
      this.setState({
        noteTitleList: noteTitleLists
      })
    }

    handleNotebookTitleChange = (e) => {
      this.setState({
        notebooktitle: e.target.value
      })
    }


    handleNotebookSubmit = (e) => {
      e.preventDefault()
      this.props.createNotebook(this.state.notebooktitle)
      this.props.getAllNotebooks()
    }


    // getAllNotesFromOneNotebook = () => {
    //   let notebookId = parseInt(this.state.user.id)
    //   axios.get(`/notebooks/${notebookId}/notes`)
    //   .then(res => {
    //     this.setState({
    //       singleNotebookNotes: res.data.notes,
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err, "notebook request");
    //   })
    // }




  render() {
/*
    let noteTitleLists;
    let notebookList = this.props.notebooks.map((notebook, i) => {
      if (this.props.singleNotebookNotes) {
        // debugger
       noteTitleLists = this.props.singleNotebookNotes.map((notes) => {
         // debugger
         return (
           <div data-notebook_id={notebook.id} key={notebook.id}>
             <h3 data-notebook_id={notebook.id} onClick={this.handleNotebookClick}>{notebook.notebook_type}</h3>
             <br />
             <li key={notes.id}>{notes.title}</li>
           </div>
         )
       })
     }
    })

*/

    let notebookList = this.props.notebooks.map((notebook, i) => {
      return (
        <div data-notebook_id={notebook.id} key={notebook.id}>
          <h3 data-notebook_id={notebook.id} onClick={this.handleNotebookClick}>{notebook.notebook_type}</h3>
          <br />
          {this.state.noteTitleList ? this.state.noteTitleList : ""}
        </div>
      )
    })

   //  let noteTitleLists;
   // if (this.props.singleNotebookNotes) {
   //   noteTitleLists = this.props.singleNotebookNotes.map((notes) => {
   //     debugger
   //     return <li key={notes.id}>{notes.title}</li>
   //   })
   // }

    return (
      <div className="trash">
      <h1>YOUR NOTEBOOKS</h1>
      <input name="notebooktitle" onChange={this.handleNotebookTitleChange} value={this.state.notebooktitle} type="text" placeholder="add a new notebook"  />
      <button onClick={this.handleNotebookSubmit}>save</button>


      <ul>
      {notebookList}
      </ul>

      </div>
    )
  }
}
