package com.br1perrone.dsmovie.repositories;

import com.br1perrone.dsmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
}
