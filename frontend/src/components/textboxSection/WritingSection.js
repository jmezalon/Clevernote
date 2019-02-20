import React from 'react';


export const Writingsection = ({ handleChange, handleSubmit, title, body, tag, notebook_id }) => {
  return (
    <div className="writingsection">
    <p>a link to the notebook name</p>
    <hr />
    <form className='writingform' onSubmit={handleSubmit}>
    <textarea className="titlebox" rows='2' cols='72' type="text" placeholder="Title" wrap='soft' onChange={handleChange} name="title" value={title} />

    <textarea rows='20' cols='72' wrap='soft' overflow='scroll'  name="body" placeholder="Click on a note to view or edit" type="text" onChange={handleChange} value={body} />
    <hr />
    <input type="text" name="tag" onChange={handleChange} value={tag} placeholder="add tag" />
    <br />
    <button type="submit" className="addnewnote">add note</button>
    </form>
    
    </div>
  )
}
