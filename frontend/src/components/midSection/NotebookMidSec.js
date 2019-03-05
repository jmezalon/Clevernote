import React from 'react';


export const NotebookMidSec = ({notebooks, handleClick}) => {
  let notebookList = notebooks.map((notebook, i) => {
    return (
      <div data-notebook_id={notebook.id} key={notebook.id} onClick={handleClick}>
        <h3 data-notebook_id={notebook.id}>{notebook.notebook_type}</h3>
        <br />
      </div>
    )
  })
  return (
    <div className="trash">
    <h1>YOUR NOTEBOOKS</h1>
    <input type="text" placeholder="add a new notebook"  />
    <button>save</button>
    {notebookList}
    </div>
  )
}
