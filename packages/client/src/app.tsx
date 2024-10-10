import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import HotelDetails from './pages/HotelDetails';
import CountryDetails from './pages/CountryDetails';
import CityDetails from './pages/CityDetails';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels/:id" Component={HotelDetails} />
      <Route path="/countries/:name" Component={CountryDetails} />
      <Route path="/cities/:name" Component={CityDetails} />
    </Routes>
  </Router>
);

export default App;