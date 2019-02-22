import React from 'react';


export const AllNotesMidSec = ({notes, handleClick}) => {
  let titleList = notes.map((note, i) => {
    return (
      <div data-note_id={note.id} key={note.id} onClick={handleClick}>
        <p data-note_id={note.id}><strong data-note_id={note.id}>{note.title}</strong></p>
        <hr />
      </div>
    )
  })
  return (
    <div className="midsection">
    <h4>All Notes</h4>
    <hr />
    {titleList.reverse()}
    </div>
  )
}
