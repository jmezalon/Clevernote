import React from 'react';


export const Writingsection = ({ notebooks, notetype, createNote, editNote, noteSetting, notetoedit, notes, selection }) => {

  const handleChange = (e) => {
    let note = {...notetoedit}
    note[e.target.name] = e.target.value
    noteSetting(note, notetype)
  }
let notebookList;
if (notebooks) {
  notebookList = notebooks.map((notebook) => {

    return <option key={notebook.id}>{notebook.notebook_type}</option>
  })

}

  const handleSubmit = (e) => {
    e.preventDefault()
    editNote(notetoedit)
  }

  return (
    <div className="writingsection">

    <form className='writingform' onSubmit={handleSubmit}>

    <textarea rows='2' cols='72' type="text" placeholder="Your notebook" wrap='soft' onChange={handleChange} name="notebook_type" value={notetoedit ? notetoedit.notebook_type : ""} />


    <br />

    {notetype==="newnote" ?
    <select className="selectNotebook">
      {notebookList}
    </select>
    : ""}


    <hr />



    <textarea className="titlebox" rows='2' cols='72' type="text" placeholder="Title" wrap='soft' onChange={handleChange} name="title" value={notetoedit ? notetoedit.title : ""} />

    <textarea rows='20' cols='72' wrap='soft' overflow='scroll'  name="body" placeholder="click to view or edit a note" value={notetoedit ? notetoedit.body : ""} type="text" onChange={handleChange} />
    <hr />
    <input type="text" name="tag" onChange={handleChange} value={notetoedit.tag ? notetoedit.tag : ""} placeholder="add tag" />
    <br />
    {notetype==="newnote" ?
    <button type="submit" className="addnewnote">add note</button> :
    <button type="submit" className="addnewnote">save</button>
    }
    </form>

    </div>
  )
}
