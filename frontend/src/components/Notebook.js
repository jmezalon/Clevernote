import React from 'react';
import { NotebookMidSec } from './midSection/NotebookMidSec';

const Notebooks = ({ notebooks, createNotebook, user, getAllNotebooks, getAllNotesFromOneNotebook }) =>{


      return (
      <div className='thenotebooks'>
        <NotebookMidSec notebooks={notebooks} user={user} getAllNotebooks={getAllNotebooks}
        createNotebook={createNotebook} getAllNotesFromOneNotebook={getAllNotesFromOneNotebook}
       />
      </div>
    )

}

export default Notebooks;
