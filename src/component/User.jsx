import React from 'react'
import './Home.css'
const User = () => {
  return (
    <section>
      <div className='profile'>
    <h4>LOGO</h4>
      <div>
        <p className='name'>naglikar diagnostic labouratory</p>
        <p style={{color: 'gray'}}>Lorem ipsum dolor sit ametipsum dolor.- 560645</p>
      </div>
      </div>
      <div className="content container-fluid">
        <div className="proContent">
        <span>
        <p className="ask">patient no</p>
        <p className="ask">patient name</p>
        <p className="ask">age/sex</p>
        <p className="ask">doctor</p>
        </span>
        <span className='gap'>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </span>
        <span>
        <p className="ask">1102</p>
        <p className="ask">ashok kumar</p>
        <p className="ask">55 yrs / male</p>
        <p className="ask">dr. self</p>
        </span>
        </div>
        <div className="proContent">
        <span>
        <p className="ask">bill no</p>
        <p className="ask">bill date</p>
        <p className="ask">phone number</p>
        <p className="ask">bill type</p>
        <p className="ask">sample from</p>
        </span>
        <span className='gap'>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </span>
        <span>
        <p className="ask">202/23</p>
        <p>08-April, 10:23AM</p>
        <p className="ask">9876543210</p>
        <p className="ask">cash</p>
        <p>LAB</p>
        </span>
        </div>
      </div>
      <div className="content wid border">
        <p>TEST NAME</p>
        <br />
        <p>RESULT</p>
        <p>UNITS</p>
        <br />
        <p>NORMAL RANGE</p>
      </div>
      <p className="center br" style={{textDecoration: 'underline', marginBottom: '25px'}}>Bio Chemistry</p>
      <div style={{paddingLeft: '10vw'}}><p className="br">FBS PRBS</p></div>
      <div className="content wid gray">
        <div>
          <p>fasting blood sugar</p>
          <p>post prandial blood sugar</p>
        </div><br />
        <div>
          <p>155.7</p>
          <p>180.2</p>
        </div>
        <div>
          <p>mg/di</p>
          <p>mg/di</p>
        </div><br />
        <div>
          <p>70-110 mg/dl</p>
          <p>110-140 mg/dl</p>
        </div>
      </div>
      <div style={{paddingLeft: '10vw'}}><p className="br">LIPID PROFILE</p></div>
      <div className="content wid gray">
        <div>
          <p>total cholesteral</p>
        </div><br />
        <div>
          <p>138.7</p>
        </div><br /><br />
        <div>
          <p>mg/di</p>
        </div><br />
        <div className='info'>
          <p>desirable: 200</p>
          <p>borderline: 200-239</p>
          <p>high 240</p>
        </div>
      </div>
      <br />
      <div className="content wid gray">
        <div>
          <p>triglycerides</p>
        </div><br />
        <div>
          <p>138.7</p>
        </div><br /><br />
        <div>
          <p>mg/di</p>
        </div><br />
        <div className='info'>
          <p>desirable: 200</p>
          <p>borderline: 200-239</p>
          <p>high 240</p>
        </div>
      </div><br /><br />
      <p className="center gray">***End of report***</p>
      <div className="sign">
        <p className='sig'>Signature</p>
        <p className="gray">lab technologist</p>
      </div>
      <hr />
      <div className="content wid">
        <p className="gray">thanks for refferal</p>
        <p className="gray">phone number: 9876543210</p>
      </div>
    </section>
  )
}

export default User
