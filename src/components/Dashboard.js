import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { logoutUser } from '../services/magic';
const Dashboard = () => {
  const { email } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logoutUser();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-2">
      <div className="d-flex justify-content-end">
        <button  onClick={handleLogOut}>
          Sign Out
        </button>
      </div>
      <h1 className="h1">User: {email}</h1>
    </div>
  );
};
export default Dashboard;