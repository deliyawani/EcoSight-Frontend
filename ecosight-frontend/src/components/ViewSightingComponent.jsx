import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ViewSightingComponent = () => {

    const navigator = useNavigate();

    const dummyData = [
        {
            "species": "Alces alces",
            "common": "Moose",
            "lat": "1.1",
            "lon": "1.1",
            "img": "img",
            "valid": "false"
        }

    ]


    const remove = (sighting) => {

      navigator('/c-home');

        console.log("Submission Removed")
    }

    return (
        <div className='container'>

            <br></br>
            <br></br>

            <h2 className='text-center'>Sighting Information</h2>

            <br></br>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Species Scientific Name</th>
                        <th>Common Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Images</th>
                        <th>Verified</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(sighting =>
                            <tr key={sighting.species}>
                                <td>{sighting.species}</td>
                                <td>{sighting.common}</td>
                                <td>{sighting.lat}</td>
                                <td>{sighting.lon}</td>
                                <td>{sighting.img}</td>
                                <td>{sighting.valid}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button className='btn btn-success' onClick={remove} >Remove Sighting</button>

        </div>
    )
}

export default ViewSightingComponent
