import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const authToken = sessionStorage.getItem('Auth Token');

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
  }

  const navigate = useNavigate();

  return (
        <nav className="header">
            <div className="header-text">
                <h3>Golf Statistics</h3>
            </div>
            <div className="nav-buttons">
              {authToken && <button className="nav-button" onClick={handleLogout}>Log out</button>}
            </div>
            
        </nav>
  )
}

export default Header