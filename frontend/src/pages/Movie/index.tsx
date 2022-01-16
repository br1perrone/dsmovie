import { useParams } from 'react-router-dom';

import MovieGreet from 'components/MovieGreet';

function Movie() {
    const params = useParams();

    return (
        <MovieGreet movieId={`${params.movieId}`} />
    )
}

export default Movie;