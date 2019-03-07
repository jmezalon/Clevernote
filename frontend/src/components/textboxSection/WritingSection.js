import React, { Component } from 'react';


export class Writingsection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notebook_id: props.notebooks[0].id,
    }

  }

componentDidUpdate(prevProps) {
  if (this.props.notetoedit !== prevProps.notetoedit && this.props.notetype==="selection") {
    this.setState({
      notebook_id: this.props.notetoedit.notebook_id
    });
  }
}

handleSelect = (e) => {
  return (
    this.setState({
      notebook_id: parseInt(e.target.value)
    })
  )
}

handleSubmit = (e) => {

    e.preventDefault()
    if (this.props.notetype==="selection"){
      this.props.editNote(this.props.notetoedit)
    } else {
      this.props.createNote({...this.props.notetoedit, notebook_id: this.state.notebook_id })
    }
    this.props.history.push("/notes")
  }

  handleChange = (e) => {
    let note = {...this.props.notetoedit}
    note[e.target.name] = e.target.value
    this.props.noteSetting(note, this.props.notetype)
  }

  componentDidMount () {
    this.props.noteSetting({}, "selection")
    this.props.noteSetting({}, "newnote")
  }

  render () {
    const { notebooks, notetype, notetoedit } = this.props




    let notebookList;
    if (notebooks) {
      notebookList = notebooks.map((notebook, i) => {

        return  <option key={notebook.id}  value={notebook.id}>{notebook.notebook_type}</option>
      })

    }

    return (
      <div className="writingsection">

      <form className='writingform' onSubmit={this.handleSubmit}>



      {this.props.notetype==="selection" ? <h1>{this.props.notetoedit.notebook_type}</h1> : <select onChange={this.handleSelect} value={this.state.notebook_id} className="selectNotebook">
        {notebookList}
      </select>}



      <hr />



      <textarea className="titlebox" rows='2' cols='72' type="text" placeholder="Title" wrap='soft' onChange={this.handleChange} name="title" value={this.props.notetoedit ? this.props.notetoedit.title : ""} />

      <textarea rows='20' cols='72' wrap='soft' overflow='scroll'  name="body" placeholder="click to view or edit a note" value={notetoedit ? notetoedit.body : ""} type="text" onChange={this.handleChange} />
      <hr />
      <input type="text" name="tag" onChange={this.handleChange} value={this.props.notetoedit.tag ? this.props.notetoedit.tag : ""} placeholder="add tag" />
      <br />
      {notetype==="newnote" ?
      <button type="submit" className="addnewnote">add note</button> :
      <button type="submit" className="addnewnote">save</button>
      }
      </form>

      </div>
    )


  }

}
