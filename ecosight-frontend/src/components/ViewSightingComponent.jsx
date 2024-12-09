import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { viewSighting, deleteSighting, updateSighting } from '../services/SightingService';

const ViewSightingComponent = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const { id, sId, role } = location.state || {};
    const [status, setStatus] = useState('PENDING');
    const [sightingInfo, setSighting] = useState(null);

    useEffect(() => {
        viewSighting(sId, { headers: { 'X-User-Id': id } })
            .then((response) => {
                setSighting(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [sId, id]);

    const remove = () => {
        deleteSighting(sId, { headers: { 'X-User-Id': id } })
            .then(() => {
                navigator('/c-home', { state: { id } });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const statusUpdate = (newStatus) => {
        updateSighting(sId, { status: newStatus }, { headers: { 'X-User-Id': id } }
        )
            .then(() => {
                navigator('/r-home', { state: { id } });
            })
            .catch((error) => {
                console.error(error);
            });
    };


    if (!sightingInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <button className="btn btn-light btn-lg" onClick={() => navigator(-1, { state: { id } })}>Back to All Submissions</button>
            <div className="container">
                <h2 className="text-center">Sighting Information</h2>
                <br />

                <table className="table table-striped table-bordered">
                    <tbody>
                        {Object.entries(sightingInfo).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>
                                    {key === 'imageUrls' && Array.isArray(value)
                                        ? value.map((url, index) => (
                                            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                                                Image {index + 1}
                                            </a>
                                        ))
                                        : String(value)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <br />

                {role === 'CONTRIBUTOR' && (
                    <button className="btn btn-dark" onClick={remove}>
                        Remove Sighting
                    </button>
                )}

                {role === 'RESEARCHER' && (
                    <div className="form-group">
                        <label className="form-label">Change Status:</label>
                        <select
                            className="form-control"
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                                statusUpdate(e.target.value);
                            }}
                        >
                            <option value="REJECTED">Rejected</option>
                            <option value="PENDING">Pending</option>
                            <option value="APPROVED">Approved</option>
                        </select>
                    </div>
                )}

                <br></br>
                <br></br>
            </div>
        </div>
    );
};

export default ViewSightingComponent;
