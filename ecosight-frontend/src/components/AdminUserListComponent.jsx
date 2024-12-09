import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { allUsers } from '../services/UserService';

const AdminUserListComponent = () => {
  const navigator = useNavigate();
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const id = location.state?.id;

  useEffect(() => {
    allUsers({ headers: { 'X-User-Id': id } })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const rowClick = (user) => {
    const uId = user.id;
    navigator('/view-user', { state: { id, uId } });
  };

  return (
    <div>
      <button className="btn btn-light btn-lg" onClick={() => navigator('/sign-in')}>
        Back to Sign In
      </button>
      <div className="container">
        <br />
        <br />
        <h2 className="text-center">User Information</h2>
        <br />

        {users.length === 0 ? (
          <div className="text-center">
            <p>No users found.</p>
          </div>
        ) : (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => rowClick(user)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminUserListComponent;
