import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-wrapper">
      <header className="home-header">
        <h1 className="home-title">BeavEvents</h1>
        <div className="nav-buttons">
          <Link to="/clubs"><button className="nav-btn">Clubs</button></Link>
          <Link to="/events"><button className="nav-btn">Events</button></Link>
        </div>
      </header>

      <main className="home-content">
        <p><strong>Website Description:</strong><br />
        A website that helps manage clubs<br /></p>
      </main>

      <footer className="home-footer">
        Contact info etc
      </footer>
    </div>
  );
}

export default Home;
