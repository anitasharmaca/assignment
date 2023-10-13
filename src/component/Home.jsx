import React, {useState} from 'react'
import './Home.css'
import Patient from './Patient';
import { profiles } from './Data';
const Home = () => {
  const [data, setData] = useState(profiles);
  const remove = (id) => {
      setData(data.filter((item) => item.id !== id))
  }
  const pendingPatient = () =>{
    setData(data.filter((user) => user.status === 'pending'))
  }
  const completePatient = () =>{
    setData(data.filter((user) => user.status === 'complete'))
  }
  const reset = () =>{
    setData(profiles)
  }
  return (
    <section>
        <div className="menu">
          <p className='unique'>patients</p>
          <p>patients cards</p>
          <p>sample collection</p>
        </div>
        <div className='containerr'>
        <div className="content">
        <span className='topic'>patients
        <br /><small style={{color: 'rgb(208, 203, 203)', fontSize: '8px'}}>345 pending patients report</small>
        </span>
        <button className='btn'><i class="bi bi-person"></i>Add new patient</button>
        </div>
        <div className="content">
          <span className='sub'>
            <p><i class="bi bi-funnel"></i></p>
            <p>filter by</p>
            <p>
              <select name="date">
                <option value="Date">Date</option>
                <option value="recents">Recents</option>
                <option value="this week">This week</option>
              </select>
            </p>
            <p>
              <button style={{color: 'white'}} onClick={completePatient}>Complete</button>
            </p>
            <p>
              <button style={{color: 'white'}} onClick={pendingPatient}>Pending</button>
            </p>
            <p className='color'><i class="bi bi-arrow-clockwise"></i>
            <button style={{color: 'orange'}} onClick={reset}>Reset filter</button>
            </p>
          </span>
          <button className='print' onClick={() => window.print()}>print</button>
          <div className='search'>
          <i class="bi bi-search"></i>
          <p>search</p>
          </div>
        </div>
        <div className="content">
          <p className="subject">sL no.</p>
          <p className="subject">patient name</p>
          <p className="subject">date & time</p>
          <p className="subject">lab number</p>
          <p className="subject">reffered by.</p>
          <p className="subject">sample from</p>
          <p className="subject">price</p>
          <p className="subject">status</p>
          <p className="subject">action</p>
        </div>
        <div>
        {
          data.map((user, index) =><Patient
          key={index} remove={remove}
          id={user.id} name={user.name} lab={user.lab} date={user.date} time={user.time}
          refer={user.refer} from={user.from} price={user.price} status={user.status}
          />)
        }
        </div>
        </div>
    </section>
  )
}

export default Home
