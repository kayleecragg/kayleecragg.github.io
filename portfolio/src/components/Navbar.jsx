import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const handleClick = (e) => {
    // Add clicked class to the target element
    const button = e.currentTarget;
    button.classList.add('clicked');
    
    // Remove clicked class after animation duration
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  };

  return (
    <nav>
      <ul className="navbar">
        <li><NavLink to="/" onClick={handleClick}>home</NavLink></li>
        <li><NavLink to="/projects" onClick={handleClick}>projects</NavLink></li>
        <li><NavLink to="/experience" onClick={handleClick}>experience</NavLink></li>
      </ul>
    </nav>
  );
}