import MovieStars from "components/MovieStars";
import "./styles.css";

function MovieScore({score = 0, count = 0}: {score: number, count: number}) {
    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="dsmovie-score-count">{count} {count === 1 ? 'avaliação' : 'avaliações'}</p>
        </div>
    );
}
export default MovieScore