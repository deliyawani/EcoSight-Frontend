import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SubmitSightingComponent = () => {


    const navigator = useNavigate();

    const [species, setSpecies] = useState('')
    const [common, setCommon] = useState('')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [file, setFile] = useState(null);

    function submit(e) {
        e.preventDefault();

        const submission = { species, common, lat, lon };
        console.log(submission, file);

        navigator('/c-home');
    }



    const handleFile = (event) => {
        setFile(event.target.files[0]);
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
                    <div className='card col-md-6 offset-md-3 offdet-md-3'>
                        <br></br>
                        <h2 className='text-center'>Submit New Sighting</h2>
                        <br></br>
                        <div className='card-body'>
                            <form>
                                <div className='row mb-2'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Scientific Species Name:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Scientific Species Name'
                                            name='species'
                                            value={species}
                                            className='form-control'
                                            onChange={(e) => setSpecies(e.target.value)}
                                        >
                                        </input>


                                    </div>

                                    <br></br>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Common Name:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Common Name'
                                            name='common'
                                            value={common}
                                            className='form-control'
                                            onChange={(e) => setCommon(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <br></br>

                                <div className='row mb-2'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Latitude:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Latitude'
                                            name='lat'
                                            value={lat}
                                            className='form-control'
                                            onChange={(e) => setLat(e.target.value)}
                                        >
                                        </input>


                                    </div>

                                    <br></br>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Longitude:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Longitude'
                                            name='lon'
                                            value={lon}
                                            className='form-control'
                                            onChange={(e) => setLon(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <br></br>

                                <div className='row mb-2'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Upload Images:</label>
                                        <input
                                            type='file'
                                            onChange={handleFile}
                                        >
                                        </input>
                                    </div>
                                </div>


                                <br></br>
                                <br></br>

                                <button className='btn btn-success' onClick={submit} >Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubmitSightingComponent
