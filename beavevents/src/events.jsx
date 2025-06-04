import './styles/events.css';
import { Link } from 'react-router-dom';
import logo from './assets/NoBackLogo.png';


function Events() {
  return (
    <div className="home-wrapper">
      <header className="home-header">
        
        <img src={logo}  alt="BeavEvents Logo" className="logo" />
        <div className='head-col'>
          <h1 className="home-title">
            <span style={{ color: '#D63F09', fontSize: '80px'}}>Beav</span>
            <span style={{ color: '#000000', fontSize: '80px' }}>Events</span>
          </h1>
          <nav className="menu-bar">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/clubs">Clubs</Link>
              </li>
              <li className="menu-item active">
                <Link to="/events">Events</Link>
              </li>
              <li className="menu-item">
                <Link to="/tutorial">Help</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="home-content">
        
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-column">
            <h4>Authors</h4>
            <p>Website by Carter Cripe, Owen Sexton</p>
            
            <p>Phone: (970) 581-8720</p>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Carter's Email: cripeca@oregonstate.edu</p>
            <p>Owen's Email: sextono@oregonstate.edu</p>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Instagram</a>
            <a href='https://x.com/carter_cripe' target="_blank"><p>Twitter</p></a>
            
          </div>
          <div className="footer-column">
            <h4>Image credit</h4>
            <p>BeavEvents Logo created by DALL-e </p>
          </div>
        </div>
        <div className="footer-bar">
          <p>© 2025 BeavEvents — All rights reserved.</p>
        </div>
        
      </footer>
    </div>
  );
}
  
  export default Events;
  