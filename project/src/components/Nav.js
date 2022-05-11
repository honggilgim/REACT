import '../styles/Nav.scss';
import {Routes, Route, Link} from 'react-router-dom';

export default function Nav(){
  return(
      <nav>
        <div className='navMenu'><Link to="/touristSpot">관광</Link></div>
        <div className='navMenu'><Link to="/Hotel">숙박</Link></div>
        <div className='navMenu'><Link to="/traffic">교통</Link></div>
        <div className='navMenu'><Link to="/etc">기타</Link></div>
      </nav>
  )
}