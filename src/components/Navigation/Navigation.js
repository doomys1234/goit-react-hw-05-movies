import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss'

export default function Navigation() {
    
  return (
    <div className={s.nav}>
      <NavLink end to="/"  className={({isActive})=> isActive ?`${s.active_link}` : `${s.link}`}>
        Home
      </NavLink>
      <NavLink to="/movies" className={({isActive})=> isActive ?`${s.active_link}` : `${s.link}`}>Movies</NavLink>
    </div>
  );
}
