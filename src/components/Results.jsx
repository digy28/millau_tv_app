export function Results(props) {
    return (
        <>
            {props.shows.map((result, index) =>
                <div
                    key={index}
                >
                    <img src={result.show.image?.medium} alt={result.show.name} />
                    {result.show.name}
                </div>
            )}
        </>
    )
}