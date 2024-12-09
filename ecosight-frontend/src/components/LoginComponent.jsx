import React, { useState } from 'react'
import { userLogin } from '../services/UserService';
import { useNavigate } from 'react-router-dom'


const LoginComponent = () => {

    const navigator = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function saveLogin(e) {
        e.preventDefault();

        const user = { email, password };

        userLogin(user).then((response) => {
            const id = response.data.id;
            if (response.data.role == "CONTRIBUTOR") {
                navigator('/c-home', { state: { id } });
            } else if (response.data.role == "RESEARCHER") {
                navigator('/r-home', { state: { id } });
            } else if (response.data.role == "ADMINISTRATOR") {
                navigator('/a-home', { state: { id } });
            }
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div>
            <button className="btn btn-light btn-lg" onClick={() => navigator('/')}>Back to Home Page</button>

            <br></br>
            <br></br>

            <div className='container'>
                <div className='row'>
                    <div className='card col-md-4 offset-md-4 offset-md-4'>
                        <br></br>
                        <h2 className='text-center'>Sign In</h2>
                        <br></br>
                        <div className='card-body'>
                            <form>
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
                                <br></br>

                                <button className='btn btn-dark' onClick={saveLogin} >Sign In</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginComponent
