import { useContext, useEffect, useState } from 'react';
import "./styles.css"

import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import { api } from 'utils/constants';
import { Movie } from 'utils/types';
import { Context } from 'contexts/Context';
import { PageType } from 'reducers/PageReducer';
import { SessionType } from 'reducers/SessionReducer';

let timer :NodeJS.Timeout;

function List() {
    const {state, dispatch} = useContext(Context);
    const {page, session} = state;

    useEffect(() => {
        api.get(`/movies?size=${session.size}&page=${page.number}&sort=${session.sort}`)
            .then(response => {
                const data = response.data as PageType;
                dispatch({type: 'SET_PAGE', payload: data as PageType});
                console.log('List.useEffect[page.number]', {data, page, session});
            })
            .catch((err)=>{
                console.error('List.useEffect[page.number]', err);
            });
    }, [page.number, session.sort, session.size]);

    useEffect(()=>{
        timer = setTimeout(()=>{
            dispatch({type: 'SET_UPDATED_MOVIE_ID', payload: {updatedMovieId: undefined} as SessionType});
            clearTimeout(timer);
        }, 3000);
    }, [session.updatedMovieId]);

    return (
        <>
            <Pagination page={state.page} dispatch={dispatch}/>

            <div className="container">
                <div className="row">
                    {state.page?.content?.map((movie: Movie) =>
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                            <MovieCard movie={movie} border={
                                parseInt(session.updatedMovieId || "0") == movie.id ? "update" : ""
                            } />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default List;