import { Link } from 'react-router-dom'

export function Results(props) {
    return (
        <>
            {props.shows.map((result, index) =>
                <div key={index}>
                    <br />
                    <div className="row">
                    <div className="card col-12 col-md-3">
                        <img src={result.show.image?.medium} className="card-img-top" alt={result.show.name}/>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={'/show/'+result.show.id}>{result.show.name}</Link>
                            </h5>
                            <p className="card-text">{result.show.summary}</p>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </>
        )
}