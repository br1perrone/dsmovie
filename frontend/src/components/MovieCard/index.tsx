import MovieScore from "components/MovieScore";
import "./styles.css";

function MovieCard() {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/zh7GLsorxecv0D8d7QAVkQUe1ju.jpg",
        title: "Star Trek: Discovery",
        count: 3,
        score: 4.9
    };
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-success dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}
export default MovieCard;