package com.grinds.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;

import com.grinds.model.api.User;
import com.grinds.models.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	
	 @Query(value = "SELECT * FROM T_USER WHERE username = ?1", nativeQuery = true)
	  UserEntity findByUsername(String username);
	 
	 @Query(value = "SELECT * FROM T_USER WHERE username = ?1", nativeQuery = true)
	 UserDetails findUserByUsername(String username);

}
