import axios, { AxiosRequestConfig } from 'axios';
import { useAppContext } from 'contexts/Context';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, BASE_URL } from 'utils/constants';
import { Movie } from 'utils/types';
import { validateEmail } from 'utils/validators';
import "./styles.css"

function MovieGreet({ movieId }: { movieId: string }) {
    const [{user}, dispatch] = useAppContext();
    const [email, setEmail] = useState(user.email);
    const [movie, setMovie] = useState<Movie>();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/movies/${movieId}`)
            .then((response) => {
                setMovie(response.data as Movie)
            });
    }, [movieId]);

    const goBack = () => navigate(-1);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = (e.target as any).email.value;
        if(! validateEmail(email)) return;

        const score = (e.target as any).score.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }
        axios(config).then((response) => {
            dispatch({type: 'SET_EMAIL', payload: {email} });
            goBack();
        }).catch((err)=> {
            console.error("MovieGreet.handleSubmit", err);
        });
    }

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email"
                            placeholder='Informe seu-email@example.com.br'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-success dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <button className="btn btn-success dsmovie-btn mt-3" onClick={goBack}>Cancelar</button>
            </div >
        </div >
    )
}

export default MovieGreet;