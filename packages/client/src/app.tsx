import { useState, ChangeEvent } from 'react';
import { Hotel } from './types/Hotel';
import { fetchAndFilterHotels } from './services/hotel.service';
import SearchInput from './components/SearchInput';
import HotelList from './components/HotelList';

function App() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [showClearBtn, setShowClearBtn] = useState<boolean>(false);

  const fetchData = async (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setShowClearBtn(!!query);
    setHotels(query ? await fetchAndFilterHotels(query) : []);
  };

  const clearSearch = () => {
    setShowClearBtn(false);
    setHotels([]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-start mt-5">
          <div className="col-md-6">
            <div className="dropdown">
              <SearchInput onChange={fetchData} showClearBtn={showClearBtn} onClear={clearSearch} />
              <HotelList hotels={hotels} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;