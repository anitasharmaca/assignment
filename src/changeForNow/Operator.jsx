import React from 'react'
import { useState } from 'react'
const Operator = () => {
  
  return (
    <section>
      <div className="boxes">
      <p className='padding'>11 Users</p>
      <button className='singleBtn'>Add User</button>
      </div>
      <div className="flex">
      <input type="radio" />
      <p>name</p>
      <p>mobile number</p>
      <p>verified/not verified  </p>
      <p>action</p>
      </div>
      <Data /><Data /><Data /><Data /><Data /><Data /><Data /><Data />
      <Data /><Data /><Data />
    </section>
  )
}
export function Data(){
  const [show, setShow] = useState(true);
   const handleClick = ()=>{
    setShow(!show);
   }
  return (
    <div className="flex">
        <input type='radio' />
        <p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="user" className='userPic' /> gokul mehra</p>
        <p>1596230487</p>
        <p onClick={handleClick}><i class={`bi bi-toggle2-${show ? 'on' : 'off'} switch`}></i></p>
        <p><span className="icon"><i class="bi bi-pen-fill"></i><i class="bi bi-trash-fill"></i></span></p>
      </div>
  );
}
export default Operator;
