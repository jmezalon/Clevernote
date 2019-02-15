import React from 'react';


export const AllNotesMidSec = ({notes}) => {
  let titleList = notes.map((note, i) => {
    return (
      <div key={note.id}>
        <p><strong>{note.title}</strong></p>
        <hr />
      </div>
    )
  })
  return (
    <div className="midsection">
    <h4>All Notes</h4>
    <hr />
    {titleList}
    </div>
  )
}
