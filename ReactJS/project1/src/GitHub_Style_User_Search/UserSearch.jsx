import { useState, useRef, useEffect } from "react";
import data from "../api/githubuserdata.json"
import ResultsList from "./ResultsList";

function UserSearch() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState(data);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    // auto-focus the input when the page loads
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSearch = () => {
        setLoading(true);

        // simulate network delay so you can see the loading state
        setTimeout(() => {
            const filtered = data.filter((user) =>
                user.username.toLowerCase().includes(search.toLowerCase()) ||
                user.name.toLowerCase().includes(search.toLowerCase())
            );
            setResults(filtered);
            setLoading(false);
        }, 800);
    };

    return (
        <div className="card m-4 p-3 bg-success rounded">
            <div className="d-flex m-3">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by username or name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button className="btn btn-primary ms-2" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <ResultsList results={results} />
            )}
        </div>
    );
}

export default UserSearch;