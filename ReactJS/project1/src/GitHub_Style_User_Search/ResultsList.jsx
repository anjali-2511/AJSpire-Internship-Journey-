import ResultCard from "./ResultCard";

function ResultsList(props) {
    if (props.results.length === 0) {
        return <p className="text-center text-danger">No users found</p>;
    }

    return (
        <div className="d-flex flex-wrap">
            {props.results.map((curElem) => {
                return <ResultCard key={curElem.id} curElem={curElem} />;
            })}
        </div>
    );
}

export default ResultsList;