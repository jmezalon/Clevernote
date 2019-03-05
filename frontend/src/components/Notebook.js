import React from 'react';
import { NotebookMidSec } from './midSection/NotebookMidSec';

const Notebooks = ({notebooks, handleNotebookClick}) =>{


      return (
      <div className='thenotebooks'>
        <NotebookMidSec notebooks={notebooks} handleNotebookClick={handleNotebookClick} />
      </div>
    )

}

export default Notebooks;
