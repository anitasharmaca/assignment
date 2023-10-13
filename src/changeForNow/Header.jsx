import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='navBar'>
        <div className="top">
            <h2>Admin Panel</h2>
            <input type="text" placeholder='search' />
            <div></div>
            <select>
                <option value="admin">
                <i class="bi bi-person h1"></i>
                    Admin</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
                <option value="option4">option4</option>
            </select>
        </div>
      <main className='menu'>
      <Link to={'/'}><i class="bi bi-clock"></i>Dashboard</Link>
      <Link to={'/Operator'}><i class="bi bi-person-fill"></i>Operator</Link>
      <Link to={'/Admin'}><i class="bi bi-person"></i>Admin</Link>
      <Link to={'/Customerss'}><i class="bi bi-people-fill"></i>Customer</Link>
      <Link to={'/Workss'}><i class="bi bi-inboxes-fill"></i>Work</Link>
      <Link to={'/Setting'}><i class="bi bi-gear-fill"></i>Setting</Link>
      <Link to={"/Logout"}><i class="bi bi-box-arrow-right"></i>logout</Link> 
        </main>
    </div>
  )
}

export default Header
