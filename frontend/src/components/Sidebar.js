import React from 'react';
import { NavLink } from 'react-router-dom'

export const Sidebar = (props) => {
  return (
    <nav className="sidebar">
      <div className="profile">
        <NavLink to={'/'}><img className="profile_pic" alt="" src={props.user.profile_pic ? props.user.profile_pic : "http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Contact-icon.png"} />{props.user.full_name}</NavLink>
      </div>
      <div className='searhbar'>
        <input type='text' className='searchbar' placeholder='search all notes' />
        </div>
        <div className='newNote'>
        <NavLink to={'/new'}>New note</NavLink>
        </div>
        <NavLink to={'/notebooks/:id/notes'}>Shortcuts</NavLink>
        <NavLink to={'/notes'}>All notes</NavLink>
        <NavLink to={'/notebooks'}>Notebooks</NavLink>
        <NavLink to={'/notebooks/2/notes'}>Trash</NavLink>
        <NavLink to={'/notebooks'}>Tag</NavLink>
        <NavLink to={'/logout'} onClick={() => {props.logoutUser()}}>Log out</NavLink>
    </nav>
  )
}
