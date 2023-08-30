import { useState } from "react";
import {NavLink} from 'react-router-dom'
import { useBookStore } from "../../pinteres/store/bookStore";
import Logo from "../../assets/icons/Logo";

export const Navbar = () => {
  const [value, setValue] = useState('cat');
  // const { updateValue } = useBookStore();
  const updateValue = useBookStore((state) => state.updateValue);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      // console.log('Press Enter', value)
      updateValue(value);
    }
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
        </ul>
    </header>
  )
}
