import {useContext} from "react";
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import logo from '../assets/banana-01.png';

function NavBar() {
  const { isAuth, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      {isAuth ?
          <div className="user">
            <h4>{user.username}</h4>
            <button
                type="button"
                onClick={logout}
            >
              Log uit
            </button>
          </div>
          :
          <div>
            <button
              type="button"
              onClick={() => navigate('/signin')}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
            >
              Registreren
            </button>
          </div>
      }
    </nav>
  );
}

export default NavBar;