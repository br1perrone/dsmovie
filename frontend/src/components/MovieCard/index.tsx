import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "utils/types";
import "./styles.css";

function MovieCard({movie}: {movie: Movie}) {
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                
                <MovieScore />

                <Link to={`/movie/${movie.id}`}>
                    <div className="btn btn-success dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}
export default MovieCard;