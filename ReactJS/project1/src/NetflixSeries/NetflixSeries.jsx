import seriesData from "../api/data.json";
import SeriesCard from "./SeriesCard";
function NetflixSeries() {



    return (
        <>
            <div className="card m-5 p-5 gap-3 border bg-black text-white">
                <h1>Netflix Cards:</h1>
                <ol className="list-group-numbered">
                    {seriesData.map((curElem) => {
                        return(
                        <SeriesCard key={curElem.id}  curElem={curElem} />
                        ) 

                    })}
                </ol>
            </div>
        </>




    )
};
export default NetflixSeries;