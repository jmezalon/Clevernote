import React from 'react';


export const Writingsection = ({ notetype, createNote, noteSetting, notetoedit, notes, selection }) => {

  const handleChange = (e) => {
    let note = {...notetoedit}
    note[e.target.name] = e.target.value
    noteSetting(note, notetype)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNote(notetoedit)
  }

  return (
    <div className="writingsection">
    <p>{selection.notebook_type}</p>
    <hr />
    <form className='writingform' onSubmit={handleSubmit}>
    <textarea className="titlebox" rows='2' cols='72' type="text" placeholder="Title" wrap='soft' onChange={handleChange} name="title" value={notetoedit ? notetoedit.title : ""} />

    <textarea rows='20' cols='72' wrap='soft' overflow='scroll'  name="body" placeholder="click to view or edit a note" value={notetoedit ? notetoedit.body : ""} type="text" onChange={handleChange} />
    <hr />
    <input type="text" name="tag" onChange={handleChange} value={notetoedit.tag ? notetoedit.tag : ""} placeholder="add tag" />
    <br />
    <button type="submit" className="addnewnote">add note</button>
    </form>

    </div>
  )
}
