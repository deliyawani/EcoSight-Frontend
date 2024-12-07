import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ViewUserComponent = () => {

    const navigator = useNavigate();

    const dummyData = [
        {
            "firstName": "John",
            "lastName": "Smith",
            "email": "johnsmith@gmail.com"
        }

    ]


    const remove = () => {
        navigator('/a-home');
    }

    return (
        <div className='container'>

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
                            <tr key={user.email}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button className='btn btn-success' onClick={remove} >Remove User</button>

        </div>
    )
}

export default ViewUserComponent
