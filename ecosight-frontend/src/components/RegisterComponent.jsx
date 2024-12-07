import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/UserService';

const RegisterComponent = () => {

    const navigator = useNavigate();


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('CONTRIBUTOR');


    function saveRegistration(e) {
        e.preventDefault();

        const user = { firstName, lastName, email, password, role};

        registerUser(user).then((response) => {
            console.log(response.data);
        })

        if(role == 'CONTRIBUTOR'){
            navigator('/c-home');
        } else if(role == 'RESEARCHER') {
            navigator('/r-home');
        }
    }


    return (
        <div>
            <br></br>
            <br></br>
            <h1 className='text-center'><strong>EcoSight</strong></h1>
            <br></br>
            <br></br>
            


            <div className='container'>
                <div className='row'>
                    <div className='card col-md-4 offset-md-4 offset-md-4'>
                        <br></br>
                        <h2 className='text-center'>Register</h2>
                        <br></br>
                        <div className='card-body'>
                            <form>
                                
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter First Name'
                                        name='firstName'
                                        value={firstName}
                                        className='form-control'
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <br></br>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Last Name'
                                        name='lastName'
                                        value={lastName}
                                        className='form-control'
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <br></br>
                                
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Email'
                                        name='email'
                                        value={email}
                                        className='form-control'
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <br></br>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Password:</label>
                                    <input
                                        type='password'
                                        placeholder='Enter Password'
                                        name='password'
                                        value={password}
                                        className='form-control'
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <br></br>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Role:</label>
                                    <select
                                        className='form-control'
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value='CONTRIBUTOR'>Contributor</option>
                                        <option value='RESEARCHER'>Researcher</option>
                                    </select>
                                </div>


                                <br></br>
                                <br></br>

                                <button className='btn btn-success' onClick={saveRegistration} >Register</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterComponent
