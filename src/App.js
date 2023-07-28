import React,{useState} from 'react'
import UserInput from './components/UserInput/UserInput'
import './App.css'
const App = () => {

  const [users, setUsers]=useState([]);

  const addUser=(userData)=>{
    setUsers((currUsers)=>[...currUsers,userData]);
  };

  console.log(users);  
  return (
    <div className="app">
      <h1> User Entry System </h1>
      <UserInput addUser= {addUser} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Address</th>

          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=>{
              return < tr key= {index}>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.phone} </td>
                <td> {user.address} </td>
                <td>
                  <img src={user.image} alt="" />
                </td>
              </tr>
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default App


//my practise..
