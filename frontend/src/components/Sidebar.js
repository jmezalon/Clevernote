import React from 'react';
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="profile">
        <NavLink to={'/'}><img className="profile_pic" alt="" src="http://images.clipartpanda.com/movie-night-clipart-9cp4q9xcE.jpeg" />username here</NavLink>
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
    </nav>
  )
}
