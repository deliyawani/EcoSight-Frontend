import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResearcherSightingListComponent = () => {

    const navigator = useNavigate();


    const dummyData = [
      {
        "common": "Magpie" ,
        "date": "2012-12-12"
      },
      {
        "common": "Canada Goose" ,
        "date": "2011-11-11"
      },
      {
        "common": "Blue Jay" ,
        "date": "2010-10-10"
      },
      {
        "common": "Moose" ,
        "date": "2009-09-09"
      }

  ]


  const rowClick = (sighting) =>{

    console.log(sighting.common);
    navigator('/validate-sighting');
  }


  return (
    <div className='container '>
      
            <br></br>
            <br></br>


            <h2 className='text-center'>Submissions</h2>

            <br></br>

            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Common Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  dummyData.map(sighting =>
                    <tr key = {sighting.date}
                        onClick={() => rowClick(sighting)}
                        style={{ cursor: 'pointer'}}>
                      <td>{sighting.date}</td>
                      <td>{sighting.common}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>


    </div>

    

  )
}

export default ResearcherSightingListComponent
