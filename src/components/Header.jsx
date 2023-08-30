import { useState } from 'react';

import Logo from "./icons/Logo";
import { useBookStore } from '../store/bookStore';

function Header() {

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
            <li><a href=""><Logo/></a></li>
            <li><a href="">Inicio</a></li>
            <li><a href="">Hoy</a></li>
            <li><a href="">Crear</a></li>
            <li><input type="search" 
                  placeholder='Search'
                  onChange={e => setValue(e.target.value)} 
                  onKeyDown={handleKey}/></li>
            <li><a href="">User</a></li>
        </ul>
    </header>
  )
}

export default Header