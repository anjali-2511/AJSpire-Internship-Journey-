function SeriesCard(props) {
    return (
        <>
             
            <li key={props.key}>
                <div>
                    <img src={props.curElem.img_url} alt="" width="40%" height="40%" />
                </div>
                <h2>Name: {props.curElem.name}</h2>
                <p>Rating: {props.curElem.rating}</p>
                <p>Description : {props.curElem.description}</p>
                <p>Genre: {props.curElem.genre}</p>
                <p>Cast: {props.curElem.cast}</p>
                <a href={props.curElem.watch_url} target="_blank">
                    <button class="btn btn-primary m-3">Watch Now</button>
                </a>
            </li>
            

        </>
    )
};
export default SeriesCard;