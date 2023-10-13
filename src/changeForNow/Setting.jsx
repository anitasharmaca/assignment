import React from 'react'

const Setting = () => {
  return (
    <section>
        <h1>Manage Delete Settings</h1>
        <div className="clear">
          <span>
          <label>Automatically Delete Messages After</label><br />
          <select className='input'>
                <option value="days">3 days</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
                <option value="option4">option4</option>
            </select>
            </span>
      <button className='dlt minus'>Clear</button>
      <button className='dlt'>Submit</button>
        </div>
    </section>
  )
}

export default Setting
