import React from 'react';


export const TrashMidSec = ({trashbin}) => {
  let thetrash = trashbin.map(notes => {
    return (
      <div key={notes.id}>
        <h3>{notes.title}</h3>
        <p>{notes.body}</p>
        <br />
      </div>
    )
  })
  return (
    <div className="trash">
    <h1>Trash</h1>
    {thetrash}
    </div>
  )
}
