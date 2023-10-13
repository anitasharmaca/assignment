import React from 'react'

const Admin = () => {
  return (
    <section>
        <h1>Manage Admin Users</h1>
      <div className="boxes">
      <p className='padding'>Admins</p>
      <button className='singleBtn'>Add Staff</button>
      </div>
      <div className="flex">
      <input type="radio" />
      <p>name</p>
      <p>mobile number</p>
      <p>status</p>
      <p>verified/not verified  </p>
      <p> user type</p>
      <p>role</p>
      <p>action</p>
      </div>
    </section>
  )
}

export default Admin
