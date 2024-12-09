import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { allSightings, exportSightings } from '../services/SightingService';

const ResearcherSightingListComponent = () => {
  const navigator = useNavigate();

  const [sightings, setSightings] = useState([]);
  const location = useLocation();
  const id = location.state?.id;

  useEffect(() => {
    if (id) {
      allSightings({ headers: { 'X-User-Id': id } })
        .then((response) => {
          setSightings(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const rowClick = (sighting) => {
    const sId = sighting.sightingId;
    const role = 'RESEARCHER';
    navigator('/view-sighting', { state: { id, sId, role } });
  };

  const exportCSV = () => {
    exportSightings({ headers: { 'X-User-Id': id }, responseType: 'blob' })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'sightings_export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to export CSV. Please try again.');
      });
  };


  return (
    <div><button className="btn btn-light btn-lg" onClick={() => navigator('/sign-in')}>Back to Sign In</button>
      <div className="container">

        <br />
        <br />
        <h2 className="text-center">Submissions</h2>
        <br />

        {sightings.length === 0 ? (
          <div className="text-center">
            <p>No submissions available.</p>
          </div>
        ) : (
          <>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Sighting ID</th>
                  <th>Time of Submission</th>
                  <th>Contributor ID</th>
                  <th>Contributor Email</th>
                  <th>Scientific Name</th>
                  <th>Common Name</th>
                </tr>
              </thead>
              <tbody>
                {sightings.map((sighting) => (
                  <tr
                    key={sighting.sightingId}
                    onClick={() => rowClick(sighting)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>{sighting.sightingId}</td>
                    <td>{sighting.sightingTime}</td>
                    <td>{sighting.contributorId}</td>
                    <td>{sighting.contributorEmail}</td>
                    <td>{sighting.scientificName}</td>
                    <td>{sighting.commonName}</td>
                  </tr>
                ))}
              </tbody>
            </table>


            <button className="btn btn-dark" onClick={exportCSV}>
              Export CSV
            </button>
          </>

        )}
      </div>
    </div>
  );
};

export default ResearcherSightingListComponent;
