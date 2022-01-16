package com.br1perrone.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br1perrone.dsmovie.entities.Score;
import com.br1perrone.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
