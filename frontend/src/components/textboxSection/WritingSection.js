import React from 'react';


export const Writingsection = () => {
  return (
    <div className="writingsection">
    <p>a link to the notebook name</p>
    <hr />
    <form className='writingform'>
    <textarea className="titlebox" rows='2' cols='72' type="text" placeholder="Title" wrap='soft' />
    <textarea rows='20' cols='72' wrap='soft' overflow='scroll'  name="writingpad" placeholder="Click on a note to view or edit" type="text" id="writingpad" />
    </form>
    <hr />
    <p>we will have a link to the tags here</p>
    </div>
  )
}
