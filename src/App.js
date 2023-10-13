 //import React, { useEffect, useState, useRef } from 'react';
//import { BrowserRouter , Route , Routes ,  NavLink } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './Styling.css'
// import Chat from './Chatbot/Chat'
// import Student from './Student';
// import Home from './loginAutho/Home'
// import Naam from './loginAutho/Naam';
// const App = () => {
//   return (
//     <section className="body">
//       <BrowserRouter>
//       <nav className='navmenu'>
//       <NavLink className='menu' to='/'>Home</NavLink><br />
//       <NavLink className='menu' to='/chat'>chat box</NavLink><br />
//       <NavLink className='menu' to='/student'>student</NavLink><br />
      
//       </nav>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/student' element={<Student />} />
//         <Route path='/naam/:name' element={<Naam />} />
//         <Route path='/chat' element={<Chat />} />
//       </Routes>
//       </BrowserRouter>
//     </section>
//   )
// }
// import './Styling.css';
// import Header from "./changeForNow/Header";
// import Dashboard from "./changeForNow/Dashboard";
// import Logout from "./changeForNow/Logout";
// import Setting from "./changeForNow/Setting";
// import Workss from './changeForNow/Workss';
// import Admin from "./changeForNow/Admin";
// import Customerss from './changeForNow/Customerss';
// import Operator from "./changeForNow/Operator";
// import Login from './changeForNow/Login'
// const App = () => {
//   return (
//    <BrowserRouter>
//     <Header />
//       <Routes>
//         <Route path='/' element={<Dashboard />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/Operator' element={<Operator />} />
//         <Route path='/Admin' element={<Admin />} />
//         <Route path='/Customerss' element={<Customerss />} />
//         <Route path='/Workss' element={<Workss />} />
//         <Route path='/Setting' element={<Setting />} />
//         <Route path='/Logout' element={<Logout />} />
//       </Routes>
//    </BrowserRouter>
//   )
// }
// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import User from './component/User'
import Header from './component/Header'
const App = () => {
  return (
   <Router>
    <Header />
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/User' element={<User />} />
   {/* <Route path='/Profile' element={<Profile />} />
   <Route path='/About' element={<About />} />
   <Route path='/Support' element={<Support />} />
   <Route path='/Logout' element={<Logout />} /> */}
   </Routes>
   </Router>
  )
}

export default App;






  // const App = () => {
  //    const [data, setData] = useState([]);
  //    const [name, setName] = useState('');
  //    const [city, setCity] = useState('');
  //    const [userid, setUserid] = useState(null)

  //      useEffect(() =>{
  //       getUser()
  //      }, [])
  //      function getUser(){
  //       fetch('http://localhost:3030/users').then((result) =>
  //       result.json().then((res) =>{
  //         setData(res)
  //         setName(res[0].name)
  //         setCity(res[0].city)
  //         setUserid(res[0].id)
  //       })
  //     )
  //      }
  //      const deleteUser = (id)=>{
  //       fetch(`http://localhost:3030/users/${id}`,{
  //         method: "DELETE"
  //       }).then((res) => res.json().then((response) =>{
  //         //console.warn(response)
  //         getUser()
  //       }))
  //      }
  //      const selectUser = (id) =>{
  //       const item = data[id-1];
  //       setName(item.name)
  //       setCity(item.city)
  //       setUserid(item.id)
  //      }
  //      const updateUser = () =>{
  //       let item = {name, city, userid}
  //       console.log('item', item, userid)
  //       fetch(`http://localhost:3030/users/${userid}`, {
  //         method: "PUT",
  //         headers: {
  //                  'Accept': 'application/json',
  //                  'Content-Type': 'application/json',
  //                },
  //                body:JSON.stringify(item)
  //       }).then((result) => {
  //         result.json().then((res) =>{
  //           console.log(res)
  //           getUser()
  //         })
  //       })
  //      }
       
  //   return (
  //     <section className='body'>
  //       <h1 style={{margin: 10,}}>get API call</h1>
  //       <table border='1'>
  //         <tbody>
  //         <tr style={{fontWeight: 900,}}>
  //           <td>S no.</td>
  //           <td>Name</td>
  //           <td>City</td>
  //           <td>remove</td>
  //         </tr>
  //         {data.map((user, i) =>
  //         <tr key={i}>
  //         <td>{user.id} </td>
  //         <td>{user.name}</td>
  //         <td>{user.city}</td>
  //         <td><button onClick={() =>deleteUser(user.id)}> Remove</button></td>
  //         <td><button onClick={() =>selectUser(user.id)}> update</button></td>
  //        </tr>
  //         )} 
  //         </tbody>
  //       </table><br />
  //       <input type="text" placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br />
  //       <input type="text" placeholder='City Name' value={city} onChange={(e)=>{setCity(e.target.value)}} /><br />
  //       <button onClick={updateUser}>Update User</button>
            
  //     </section>
  //   )
  // }
  
  // export default App

  // npm install -g json-server
  // json-server --watch -p 3030 db.json
