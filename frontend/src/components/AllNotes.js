import React, { Component } from 'react';
import { AllNotesMidSec } from './midSection/AllNotesMidSec';
import Writingsection from './textboxSection/WritingSection';
import '../css/allnote.css';



class AllNotes extends Component {

  render() {
    return (
      <div className='allnotes'>
        <AllNotesMidSec handleClick={this.props.handleClick} notes={this.props.notes} thenotes={this.props.thenotes}
        foundNotes={this.props.foundNotes}
        noteSearch={this.props.noteSearch}
        noteFound={this.props.noteFound} />
        <Writingsection
        notetype="selection"
        noteSetting={this.props.noteSetting}
        notebooks={this.props.notebooks}
        notetoedit={this.props.notetoedit} editNote={this.props.editNote}
        selection={this.props.selection}
        />
      </div>
    )
  }
}

export default AllNotes;
