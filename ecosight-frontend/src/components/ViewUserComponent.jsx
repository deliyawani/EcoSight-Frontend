import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { removeUser, viewUser } from '../services/UserService';

const ViewUserComponent = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const { id, uId } = location.state || {};

    const [userInfo, setUser] = useState(null);

    useEffect(() => {
        viewUser(uId, { headers: { 'X-User-Id': id } })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [uId, id]);

    const remove = () => {
        removeUser(uId, { headers: { 'X-User-Id': id } })
            .then((response) => {
                navigator('/a-home', { state: { id } });
            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <div><button className="btn btn-light btn-lg" onClick={() => navigator('/a-home', { state: { id } })}>Back to All Users</button>

            <div className="container">
                <br />
                <br />
                <h2 className="text-center">User Information</h2>
                <br />

                {userInfo ? (
                    <div>
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {Object.entries(userInfo).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>Loading user information...</p>
                )}

                <button className="btn btn-dark" onClick={remove}>
                    Remove User
                </button>
            </div>
        </div>
    );
};

export default ViewUserComponent;
