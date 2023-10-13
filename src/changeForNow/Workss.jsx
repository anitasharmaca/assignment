import React from 'react'

const Workss = () => {
  return (
    <section>
        <h1 style={{textTransform: 'uppercase'}}>work</h1>
      <div className="boxes">
        <div className="box">
          <span className="inside">
            <span>
            <i class="bi bi-bar-chart-fill"></i>
              <h3>Total Work Requests</h3>
            </span>
            <i class="bi bi-pie-chart"></i>
          </span>
          <p>Last 24 Hours</p>
        </div>
        <div className="box">
        <span className="inside">
            <span>
            <i class="bi bi-bar-chart-fill"></i>
              <h3>Total Work Done</h3>
            </span>
            <i class="bi bi-pie-chart"></i>
          </span>
          <p>Last 24 Hours</p>
        </div>
        <div className="box">
        <span className="inside">
            <span>
            <i class="bi bi-bar-chart-fill"></i>
              <h3>Total Reveneue</h3>
            </span>
            <i class="bi bi-pie-chart"></i>
          </span>
          <p>Last 24 Hours</p>
        </div>
      </div>
      <br /><br />
      <div className="boxes">
        <div className="work">
          <h1 className='centerStyle'>Revenue of Operators</h1>
      <button className='singleBtn'>Add Staff</button>
        </div>
        <div className="work gap">
          <h1 className='centerStyle'>Revenue of Operators</h1>
      <button className='singleBtn'>Add Staff</button>
        </div>
      </div>
      <div className="boxes">
        <div className="work">
          <h1 className='centerStyle'>Revenue of Operators</h1>
      <button className='singleBtn'>Add Staff</button>
        </div>
        <div className="work gap">
          <h1 className='centerStyle'>Revenue of Operators</h1>
      <button className='singleBtn'>Add Staff</button>
        </div>
      </div>
    </section>
  )
}

export default Workss
