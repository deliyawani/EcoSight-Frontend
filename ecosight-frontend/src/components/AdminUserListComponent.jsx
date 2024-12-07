import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminUserListComponent = () => {

    const navigator = useNavigate();


    const dummyData = [
      {
        "firstName": "John" ,
        "lastName": "Smith",
        "email": "johnsmith@gmail.com"
      },
      {
        "firstName": "Mary" ,
        "lastName": "Jane",
        "email": "maryjane@shaw.ca"
      }

  ]


  const rowClick = (user) =>{

    console.log(user.email, user.firstName, user.lastName);
    navigator('/view-user');
  }


  return (
    <div className='container '>
      
            <br></br>
            <br></br>


            <h2 className='text-center'>User Information</h2>

            <br></br>

            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  dummyData.map(user =>
                    <tr key = {user.email}
                        onClick={() => rowClick(user)}
                        style={{ cursor: 'pointer'}}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>


    </div>

    

  )
}

export default AdminUserListComponent
