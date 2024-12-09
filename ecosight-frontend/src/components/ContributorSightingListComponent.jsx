import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usersSightings } from '../services/SightingService';

const ContributorSightingListComponent = () => {
  const navigator = useNavigate();

  const [sightings, setSightings] = useState([]);
  const location = useLocation();
  const id = location.state?.id;

  useEffect(() => {
    if (id) {
      usersSightings(id, { headers: { 'X-User-Id': id } })
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
    const role = 'CONTRIBUTOR';
    navigator('/view-sighting', { state: { id, sId, role } });
  };

  const newSubmission = () => {
    navigator('/submit-sighting', { state: { id } });
  };

  return (
    <div>
      <button className="btn btn-light btn-lg" onClick={() => navigator('/sign-in')}>Back to Sign In</button>
      <div className="container">

        <br />
        <br />
        <h2 className="text-center">My Submissions</h2>
        <br />

        {sightings.length === 0 ? (
          <div className="text-center">
            <p>No submissions yet!</p>
            <button className="btn btn-dark" onClick={newSubmission}>
              Create New Submission
            </button>
          </div>
        ) : (
          <>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Sighting ID</th>
                  <th>Time of Submission</th>
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
                    <td>{sighting.scientificName}</td>
                    <td>{sighting.commonName}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-dark" onClick={newSubmission}>
              New Submission
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ContributorSightingListComponent;
