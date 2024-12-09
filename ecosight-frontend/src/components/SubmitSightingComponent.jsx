import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { newSighting } from '../services/SightingService';

const SubmitSightingComponent = () => {


    const navigator = useNavigate();

    const [speciesScientificName, setSpeciesScientificName] = useState('')
    const [commonSpeciesName, setCommonSpeciesName] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [behaviourName, setBehaviourName] = useState('')
    const [behaviourLevelOfActivity, setLevelOfActivity] = useState('MEDIUM')
    const [temperature, setTemperture] = useState('')
    const [weatherType, setWeatherType] = useState('SUNNY')
    const [conservationType, setConservationType] = useState('UNKNOWN')
    const [conservationDescription, setConservationDescription] = useState('')
    const [file, setFile] = useState(null);

    const location = useLocation();
    const id = location.state?.id;


    function submit(e) {
        e.preventDefault();
        const images = [];
        images.push(file);

        const sighting = { speciesScientificName, commonSpeciesName, latitude, longitude, behaviourName, behaviourLevelOfActivity, temperature, weatherType, conservationType, conservationDescription, images };

        newSighting(sighting, { headers: { 'X-User-Id': id, 'Content-Type': 'multipart/form-data' } }).then((response) => {
            navigator('/c-home', { state: { id } });
        }).catch((error) => {
            console.error(error);
        });


    }



    const handleFile = (event) => {
        setFile(event.target.files[0]);
    }

    return (
        <div>
            <button className="btn btn-light btn-lg" onClick={() => navigator('/c-home', { state: { id } })}>Cancel</button>

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
                                        <label className='form-label'>Scientific Name:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Scientific Name'
                                            name='speciesScientificName'
                                            value={speciesScientificName}
                                            className='form-control'
                                            onChange={(e) => setSpeciesScientificName(e.target.value)}
                                        >
                                        </input>


                                    </div>

                                    <br></br>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Common Name:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Common Name'
                                            name='commonSpeciesName'
                                            value={commonSpeciesName}
                                            className='form-control'
                                            onChange={(e) => setCommonSpeciesName(e.target.value)}
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
                                            name='latitude'
                                            value={latitude}
                                            className='form-control'
                                            onChange={(e) => setLatitude(e.target.value)}
                                        >
                                        </input>


                                    </div>

                                    <br></br>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Longitude:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Longitude'
                                            name='longitude'
                                            value={longitude}
                                            className='form-control'
                                            onChange={(e) => setLongitude(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <br></br>

                                <div className='row mb-2'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Behaviour:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Behaviour Name'
                                            name='behaviourName'
                                            value={behaviourName}
                                            className='form-control'
                                            onChange={(e) => setBehaviourName(e.target.value)}
                                        >
                                        </input>


                                    </div>

                                    <br></br>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Level of Activity:</label>
                                        <select
                                            className='form-control'
                                            value={behaviourLevelOfActivity}
                                            onChange={(e) => setLevelOfActivity(e.target.value)}
                                        >
                                            <option value='LOW'>Low</option>
                                            <option value='MEDIUM'>Medium</option>
                                            <option value='HIGH'>High</option>
                                        </select>
                                    </div>
                                </div>

                                <br></br>

                                <div className='row mb-2'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Temperature:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Temeprature'
                                            name='temperature'
                                            value={temperature}
                                            className='form-control'
                                            onChange={(e) => setTemperture(e.target.value)}
                                        >
                                        </input>


                                    </div>

                                    <br></br>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Weather Type:</label>
                                        <select
                                            className='form-control'
                                            value={weatherType}
                                            onChange={(e) => setWeatherType(e.target.value)}
                                        >
                                            <option value='SUNNY'>Sunny</option>
                                            <option value='CLOUDY'>Cloudy</option>
                                            <option value='RAINY'>Rainy</option>
                                            <option value='SNOWY'>Snowy</option>
                                            <option value='WINDY'>Windy</option>
                                            <option value='FOGGY'>Foggy</option>
                                        </select>
                                    </div>
                                </div>

                                <br></br>

                                <div className='row mb-2'>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Conservation Type:</label>
                                        <select
                                            className='form-control'
                                            value={conservationType}
                                            onChange={(e) => setConservationType(e.target.value)}
                                        >
                                            <option value='ENDANGERED'>Endangered</option>
                                            <option value='VULNERABLE'>Vulnerable</option>
                                            <option value='LOW_RISK'>Low Risk</option>
                                            <option value='UNKNOWN'>Unknown</option>
                                        </select>
                                    </div>

                                    <br></br>

                                    <div className='col-md-6'>
                                        <label className='form-label'>Conservation Description:</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Conservation Description'
                                            name='conservationDescription'
                                            value={conservationDescription}
                                            className='form-control'
                                            onChange={(e) => setConservationDescription(e.target.value)}
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

                                <button className='btn btn-dark' onClick={submit} >Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubmitSightingComponent
