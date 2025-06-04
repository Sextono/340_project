import './styles/home.css';
import { Link } from 'react-router-dom';
import frisbee from './assets/OSUFrisbeeBeaverBrawl.jpg';
import logo from './assets/NoBackLogo.png';



function Home() {
 
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
              <li className="menu-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/clubs">Clubs</Link>
              </li>
              <li className="menu-item">
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
        <p className='body-text'><strong className='subheader'>About this website:</strong><br />
        Our project, BeaverConnect, is a website that helps students at Oregon State University find and get involved in campus events and clubs. Clubs can post and manage their events, and students can browse what's coming up, RSVP, and leave feedback afterward. Students can also join clubs through the site, making it easy to stay connected with what’s happening around campus. Club officers can track attendance and feedback, while students get a personalized view of events they care about. The goal is to make it easier for everyone to get involved and stay connected at OSU. 
        <br/>
        <br/>
        For more information about how to use the website, click the "Tutorial" button below.<Link to="/tutorial"><button className="tut-btn">Tutorial</button></Link></p>
        
        
      
        <div className='fris-wrap'><img src={frisbee}  alt="A frisbee player from the oregon state mens ultimate frisbee club makes a great catch at the annual beaver brawl event" className="frisbee-photo" />
          <p className='caption'>(Figure 1) A player makes a great catch at the 'Beaver Brawl', an annual tournament hosted by the OSU Mens Ultimate Frisbee Club</p>
        </div>
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
            <p>Figure 1 by Robert Scherle</p>            
          </div>
        </div>
        <div className="footer-bar">
          <p>© 2025 BeavEvents — All rights reserved.</p>
        </div>
        
      </footer>
    </div>
  );
}

export default Home;
