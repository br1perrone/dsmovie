package com.br1perrone.dsmovie.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.br1perrone.dsmovie.dto.MovieDTO;
import com.br1perrone.dsmovie.dto.ScoreDTO;
import com.br1perrone.dsmovie.entities.Movie;
import com.br1perrone.dsmovie.entities.Score;
import com.br1perrone.dsmovie.entities.User;
import com.br1perrone.dsmovie.repositories.MovieRepository;
import com.br1perrone.dsmovie.repositories.ScoreRepository;
import com.br1perrone.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		int count = movie.getScores().size();
		for (Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / count;
		
		movie.setScore(avg);
		movie.setCount(count);
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
		}
	
}
