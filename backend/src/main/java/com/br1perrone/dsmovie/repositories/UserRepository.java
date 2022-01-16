package com.br1perrone.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br1perrone.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);

}
