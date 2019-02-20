import React from "react";


export const NoteDisplay = ({ notes }) => {
  const thenotes = notes.map(note => {
    return (
      <div key={note.id}>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
        <h6>{note.tag}</h6>
      </div>
    )
  })
  return (
    <div className="notedisplay">
    {thenotes[0]}
    </div>
  )
}
