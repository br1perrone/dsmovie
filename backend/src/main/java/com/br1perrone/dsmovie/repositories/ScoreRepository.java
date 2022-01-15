package com.br1perrone.dsmovie.repositories;

import com.br1perrone.dsmovie.entities.Score;
import com.br1perrone.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
