import React, { useState } from 'react'

const LoginComponent = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function saveLogin(e){
        e.preventDefault();

        const login = {email, password};
        console.log(login);
    }


  return (
    <div>
    <br></br>
    <br></br>
    <h1 className='text-center'><strong>EcoSight</strong></h1>
    <br></br>
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

                            <button className='btn btn-success' onClick={saveLogin} >Sign In</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LoginComponent
