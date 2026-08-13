function ResultCard(props) {
    return (
        <div className="col-6 p-2">
            <div className="card m-1 p-3 border border-2">
                <h3>{props.curElem.name}</h3>
                <h5 className="text-muted">@{props.curElem.username}</h5>
                <p>City: {props.curElem.city}</p>
                <p>Email: {props.curElem.email}</p>
                <p>Followers: {props.curElem.followers}</p>
            </div>
        </div>
    );
}

export default ResultCard;