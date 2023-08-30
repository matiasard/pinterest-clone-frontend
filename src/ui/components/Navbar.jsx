import { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import { useBookStore } from "../../store/bookStore";
import Logo from "../../assets/icons/Logo";

export const Navbar = () => {
  const [value, setValue] = useState('cat');
  const updateValue = useBookStore((state) => state.updateValue);
  // const { updateValue } = useBookStore();
  const navigate = useNavigate();

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      // console.log('Press Enter', value)
      updateValue(value);
      navigate("/home")
    }
  }

  const onLogout = () => {
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
            <li><NavLink to="/login">User</NavLink></li>
            <li><button onClick={onLogout}>Logout</button></li>
        </ul>
    </header>
  )
}
