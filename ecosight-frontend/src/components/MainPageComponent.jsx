import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MainPageComponent = () => {

    const navigator = useNavigate();


    function signIn() {
        navigator('/sign-in');
    }

    function register() {
        navigator('/register');
    }


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-center'><strong>Welcome!</strong></h1>
            <br></br>
            <br></br>
            <br></br>
            <div className='d-flex justify-content-center gap-3'>

                <button className='btn btn-dark btn-lg' onClick={signIn} >Sign In</button>
                <button className='btn btn-dark btn-lg' onClick={register} >Register</button>

            </div>
        </div>
    )
}

export default MainPageComponent
