import React from 'react'
import './Patient.css'
const Patient = ({id, name, lab, date, time, refer, from, price, status, remove}) => {
    const handleClick =()=>{
        remove(id)
    }
  return (
    <div className='flex'>
        <p>{id}</p>
        <p>{name} <br /> <small style={{color: 'gray'}}>{lab}</small></p>
        <p>{date} <br /> <small style={{color: 'gray'}}>{time}</small></p>
        <p>{lab}</p>
        <p>{refer}</p>
        <p>{from}</p>
        <p>${price}</p>
        <p style={{color: 'orange'}}><i class="bi bi-hourglass-split"></i>{status}</p>
        <button className='dot' onClick={() =>handleClick()}><i class="bi bi-trash3-fill"></i></button>
    </div>
  )
}

export default Patient
