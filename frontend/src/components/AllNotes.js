import React, { Component } from 'react';
import { AllNotesMidSec } from './midSection/AllNotesMidSec';
import { Writingsection } from './textboxSection/WritingSection'


class AllNotes extends Component {

  render() {
    return (
      <div className='allnotes'>
        <AllNotesMidSec handleClick={this.props.handleClick} notes={this.props.notes} />
        <Writingsection
        notetype="selection"
        noteSetting={this.props.noteSetting}
        notetoedit={this.props.notetoedit} createNote={this.props.createNote}
        />
      </div>
    )
  }
}

export default AllNotes;
