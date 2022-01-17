import { useEffect, useState } from 'react';
import "./styles.css"

import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import { api } from 'utils/constants';
import { Movie, SortMovie } from 'utils/types';
import { useAppContext } from 'contexts/Context';
import { PageType } from 'reducers/PageReducer';

function List() {
    const [session, dispatch] = useAppContext()

    const [pageNumber, setPageNumber] = useState(session.page.number);
    const [sort] = useState<SortMovie>('id');
    //const [sort, setSort] = useState<SortMovie>('id');
    const [size] = useState(12);
    //const [size, setSize] = useState(12);
    const [page, setPage] = useState<PageType>(session.page);

    useEffect(() => {
        api.get(`/movies?size=${size}&page=${pageNumber}&sort=${sort}`)
            .then(response => {
                const data = response.data as PageType;
                setPage(data);
                console.log('List.useEffect[pageNumber]', data);
            })
            .catch((err)=>{
                console.error('List.useEffect[pageNumber]', err);
            });
    }, [
        size, sort,
        pageNumber
    ]);

    useEffect(()=>{
        console.log('List.useEffect[page]', page);
        dispatch({type: 'SET_PAGE', payload: page as PageType});
    }, [page, dispatch]);

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page?.content?.map((movie: Movie) =>
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                            <MovieCard movie={movie} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default List;