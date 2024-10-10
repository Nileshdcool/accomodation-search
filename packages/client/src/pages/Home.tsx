import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import { Subject, debounceTime } from "rxjs";
import HotelList from "../components/HotelList";
import SearchInput from "../components/SearchInput";
import { fetchAndFilterResults } from "../services/hotel.service";

function Home() {
    const [results, setResults] = useState<any>(null);
    const [showClearBtn, setShowClearBtn] = useState<boolean>(false);
    const searchSubject = useRef(new Subject<string>());
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const subscription = searchSubject.current.pipe(
            debounceTime(500)
        ).subscribe(query => {
            if (query) {
                setLoading(true);
                fetchAndFilterResults(query).subscribe(data => {
                    setResults(data);
                    setLoading(false);
                    toast.success('Results fetched successfully!');
                });
            } else {
                setResults(null);
                toast.error('No data to fetch');
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    const fetchData = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setShowClearBtn(!!query);
        searchSubject.current.next(query);
    };

    const clearSearch = () => {
        setShowClearBtn(false);
        setResults(null);
    };
    return (
        <div className="App">
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-start mt-5">
                    <div className="col-md-6">
                        <div className="dropdown">
                            <SearchInput onChange={fetchData} showClearBtn={showClearBtn} onClear={clearSearch} />
                            {loading ? (
                                <Oval
                                    height={80}
                                    width={80}
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#4fa94d"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                />
                            ) : (
                                <HotelList results={results} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home;