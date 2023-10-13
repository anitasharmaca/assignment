import { Button } from 'bootstrap'
import React from 'react'

const Msg = ({msg, user, option}) => {
  return (
    /*<div className='d-flex flex-direction-column text-light'>
      {props.user ? 
       ( <span className='right-msg'>
            <span>{props.messages}</span>
        </span>
      ) : ( <span className='left-msg'>
        <span>{props.messages}</span>
      </span>)
      }
    </div>  */
    <div className="overflow">
        {user ? (<span className='right'><p>{msg}</p>
        <div><button>{option}</button></div>
        </span>) : (<span className='left'><p>{msg}</p></span>)}
    </div>
  )
}

export default Msg
