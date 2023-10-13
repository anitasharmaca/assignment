import React from 'react'

const Logout = () => {
  return (
    <section>
        <h1>Add Operator</h1>
        <form className="container">
        <div className="info">
          <span>
            <label className='labeling'>First Name</label>
            <input type="text" />
          </span>
          <span>
            <label className='labeling'>Last Name</label>
            <input type="text" />
          </span>
          <span>
            <label className='labeling'>Mobile Number</label>
            <input type="number" />
          </span>
        </div>

        <div className="info">
          <span>
            <label className='labeling'>Email</label>
            <input type="text" />
          </span>
          <span>
            <label className='labeling'>Password</label>
            <input type="text" />
          </span>
          <span>
            <label className='labeling'>Confirm Password</label>
            <input type="number" />
          </span>
        </div>

        <div className="info">
          <span>
            <label className='labeling'>Operator ID</label>
            <input type="text" />
          </span>
          <button className='hide'>hi</button>
        </div>
        <div className="buttons">
        <button className='submit'>Clear</button>
      <button className='submit'>Submit</button>
        </div>
        </form>
    </section>
  )
}

export default Logout
