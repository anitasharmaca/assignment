import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Style.css';
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');



const hanleLogin=async (e)=>{
  e.preventDefault()
  const apiUrl = 'https://needup.in/api/admin/login';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password:pass,
      }),
    });

    if (response.ok) {
      // Authentication successful, redirect or perform desired action
      alert('Login successful!');
    } else {
      // Authentication failed, handle error
      alert('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}



  const validate = () =>{
    let res = true;
    if(name === '' || name === null){
      res=false;
      alert('Please Enter Your Name!')
    }
    if(pass === '' || pass === null){
      res=false;
      alert('Please Enter Password!')
    }
    return res;
  }
  return (
    <div className='page'>
      <h1>Login here</h1>
      <form onSubmit={hanleLogin} className="login">
        {/* <input type="text" value={name} style={{marginTop: "55px"}} placeholder='Name...' onChange={(e) => setName(e.target.value)} /> */}
        <input type="email" value={email} style={{marginTop: "-15px"}} placeholder='Email Address....' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={pass} style={{marginTop: "-15px"}} placeholder='Password....' onChange={(e) => setPass(e.target.value)} />
        <button type='submit'>Submit</button>
        <Link to={'/'}></Link>
      </form>
      <button className='bts'>Already Have Account? Register</button>
    </div>
  )
}

export default Login
