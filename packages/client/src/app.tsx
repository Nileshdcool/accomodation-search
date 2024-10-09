import { useState, ChangeEvent } from 'react';
import { Subscription } from 'rxjs';
import SearchInput from './components/SearchInput';
import HotelList from './components/HotelList';
import { fetchAndFilterResults } from './services/hotel.service';

function App() {
  const [results, setResults] = useState<any>([]);
  const [showClearBtn, setShowClearBtn] = useState<boolean>(false);
  let subscription: Subscription;

  const fetchData = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setShowClearBtn(!!query);

    if (subscription) {
      subscription.unsubscribe();
    }

    if (query) {
      subscription = fetchAndFilterResults(query).subscribe(setResults);
    } else {
      setResults([]);
    }
  };

  const clearSearch = () => {
    setShowClearBtn(false);
    setResults([]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-start mt-5">
          <div className="col-md-6">
            <div className="dropdown">
              <SearchInput onChange={fetchData} showClearBtn={showClearBtn} onClear={clearSearch} />
              <HotelList results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;