import React, { useEffect, useState } from 'react';
import "./styles.css"

import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import { api } from 'utils/constants';
import { MoviePage, SortMovie } from 'utils/types';

function List() {
    const [pageNumber, setPageNumber] = useState(0);
    const [sort] = useState<SortMovie>('id');
    //const [sort, setSort] = useState<SortMovie>('id');
    const [size] = useState(12);
    //const [size, setSize] = useState(12);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        empty: true, last: true, first: true,
        size, number: pageNumber,
        numberOfElements: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        api.get(`/movies?size=${size}&page=${pageNumber}&sort=${sort}`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [
        size, sort,
        pageNumber
    ]);

    const handlePageChange = (newPageNumber :number) => {
        setPageNumber(newPageNumber)
    }

    return (
        <>
            <Pagination onChange={handlePageChange} page={page}/>

            <div className="container">
                <div className="row">
                    {page?.content?.map((movie) =>
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