import React from 'react'

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <div className="boxes">
        <div className="box">
          <span className="inside">
            <span>
            <i class="bi bi-bar-chart-fill"></i>
              <h3>Total Work</h3>
            </span>
            <i class="bi bi-pie-chart"></i>
          </span>
          <p>Last 24 Hours</p>
        </div>
        <div className="box">
        <span className="inside">
            <span>
            <i class="bi bi-bar-chart-fill"></i>
              <h3>Total Operators</h3>
            </span>
            <i class="bi bi-pie-chart"></i>
          </span>
          <p>Last 24 Hours</p>
        </div>
        <div className="box">
        <span className="inside">
            <span>
            <i class="bi bi-bar-chart-fill"></i>
              <h3>Total Customers</h3>
            </span>
            <i class="bi bi-pie-chart"></i>
          </span>
          <p>Last 24 Hours</p>
        </div>
      </div>
      <div className="boxes">
        <div className="big">
          <img src="https://ichef.bbci.co.uk/images/ic/1280xn/p0cqdtkf.png" className="graph" />
        </div>
        <div className="big">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIC4fhfVSh5lMw1HvPnuTVOP9yC875igIDp_cAfIAB4TMH35IwtoUfn5AHW_37SbIBJM&usqp=CAU" className="graph" />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
