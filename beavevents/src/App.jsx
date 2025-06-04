import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Clubs from './clubs';
import Events from './events';
import Tutorial from './tutorial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </Router>
  );
}

export default App;
