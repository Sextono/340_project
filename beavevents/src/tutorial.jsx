import './styles/tutorial.css';
import { Link } from 'react-router-dom';
import logo from './assets/NoBackLogo.png';


function Tutorial() {
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
              <li className="menu-item">
                <Link to="/events">Events</Link>
              </li>

              <li className="menu-item active">
                <Link to="/tutorial">Help</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>





     {/*----------------------------- */}





      <div className="home-content">
      <div className='body-text'><strong className='subheader'>How to use the Clubs Page:</strong><br />
            <ul className='bullet-list'>
                <li>When you go to the clubs page, you will see a list of clubs sorted by membership</li>
                <li>To join a club, click 'Add Member', and fill out the form</li>
                <li>To create your own club, click the 'New Club' button</li>
            </ul>
            <Link to="/clubs"><button className="tut-btn">Go To Clubs</button></Link>
        </div>
        <div className='fris-wrap'><img src={logo}  alt="A frisbee player from the oregon state mens ultimate frisbee club makes a great catch at the annual beaver brawl event" className="help-photo" />
          <p className='caption'>Placeholder image. Will be a screenshot of clubs page</p>
        </div>      
      </div>
      <div className='home-content-alt'>
        <div className='body-text'><strong className='subheader'>How to use the Events Page:</strong><br />
            <ul className='bullet-list'>
                <li>When you go to the clubs page, you will see a list of events with the soonest at the top</li>
                <li>To create your own event, click the 'New Event' button and fill out the form</li>
                <li>To add your club to an event, click the join event button and fill out the form</li>
                <li>Users can RSVP to the event by selecting their name from the dropdown menu of club members</li>
                <li>To leave feedback on an event, scroll to the bottom of the page where you will see all the past events. From there, click 'Give Feedback', and fill out the form</li>


            </ul>
            <Link to="/events"><button className="tut-btn">Go To Events</button></Link>

        </div>
        <div className='fris-wrap'><img src={logo}  alt="A frisbee player from the oregon state mens ultimate frisbee club makes a great catch at the annual beaver brawl event" className="help-photo" />
          <p className='caption'>Placeholder image, will be a screenshot of the events page</p>
        </div>
      </div>








      {/*----------------------------- */}


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
  
export default Tutorial;
  