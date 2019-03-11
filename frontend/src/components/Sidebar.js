import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/sidebar.css';


export const Sidebar = (props) => {
  return (
    <nav className="sidebar">
      <div className="profile">
        <NavLink to={'/notes'}><img className="profile_pic" alt="" src={props.user.profile_pic ? props.user.profile_pic : "http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Contact-icon.png"} />{props.user.full_name}</NavLink>
      </div>
      <form className='searhbar' onSubmit={props.handleNoteSearchSubmit} >
        <input type='text' name="noteSearch" value={props.noteSearch} onChange={props.handleNoteSearchChange} placeholder='search all notes by titles' />
        <input type="submit" value="search" />
        </form>
        <div className='newNote'>
        <NavLink to={'/new'}>New note</NavLink>
        </div>

        <NavLink to={'/notes'}>All notes</NavLink>
        <NavLink to={'/notebooks'}>Notebooks</NavLink>

        <NavLink to={'/logout'} onClick={() => {props.logoutUser()}}>Log out</NavLink>
    </nav>
  )
}
