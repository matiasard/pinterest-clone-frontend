import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useBookStore } from "../../store/bookStore";
import { useAuthStore } from './../../store/authStore';

import Logo from "../../assets/icons/Logo";
import { Button } from "@mui/material";

export const Navbar = () => {
  const [value, setValue] = useState('cat');

  const updateValue = useBookStore((state) => state.updateValue);
  const {logout} = useAuthStore();
  const profile = useAuthStore((state) => state.profile);
  let isLogged = !!profile;
  const navigate = useNavigate();

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      // console.log('Press Enter', value)
      updateValue(value);
      navigate("/home")
    }
  }

  const onLogout = () => {
    logout();
    console.log("logout");

    navigate("/login", { replace: true});
  }

  return (
    <header>
        <ul>
            <li><NavLink to="/"><Logo/></NavLink></li>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/guardado">Guardado</NavLink></li>
            <li><NavLink to="/">Crear</NavLink></li>
            <li><input type="search" 
                  placeholder='Search'
                  onChange={e => setValue(e.target.value)} 
                  onKeyDown={handleKey}/></li>
            <li>
                {isLogged 
                  ? (<NavLink>
                      {profile?.username}
                    </NavLink>)
                  : (<NavLink to="auth/login">
                      Inciar Sesion
                    </NavLink>)
                }
            </li>
              {isLogged ? (
                <li>
                  <Button onClick={onLogout} variant="text" size="small" color="error">
                    Logout
                  </Button>
                </li>) : null
              }
        </ul>
    </header>
  )
}
