import React from 'react'

const Customerss = () => {
  return (
    <section>
        <h1>Manage Customers</h1>
      <div className="boxes">
      <p className='padding'>Customers</p>
      <button className='singleBtn'>New Added</button>
      </div>
      <div className="flex">
      <input type="radio" />
      <p>date</p>
      <div className="line">
      <p>name</p>
      </div>
      <div className="line">
      <p>Mobile number</p>
      </div>
      <div className="line">
      <p>state</p>
      </div>
      <div className="line">
      <p className='max'>work</p>
      </div>
      <div className="line">
      <p>total payment</p>
      </div>
      </div>
      <br /><br /><br />
      <div className="flex">
      <input type="radio" />
      <p>name</p>
      <div className="line">
      <p>mobile number</p>
      </div>
      <div className="line">
      <p>state</p>
      </div>
      <div className="line">
      <p>city</p>
      </div>
      <div className="line">
      <p>country</p>
      </div>
      <div className="line">
      <p>date to join</p>
      </div>
      <div className="line">
      <p>total revenue</p>
      </div>
      </div>
    </section>
  )
}

export default Customerss
