import React from 'react';


export const NotebookMidSec = ({notebooks}) => {
  let notebookList = notebooks.map(notes => {
    return (
      <div key={notes.id}>
        <h3>{notes.notebook_type}</h3>
        <br />
      </div>
    )
  })
  return (
    <div className="trash">
    <h1>YOUR NOTEBOOKS</h1>
    {notebookList}
    </div>
  )
}
