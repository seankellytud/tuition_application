package com.grinds.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.grinds.model.api.User;
import com.grinds.models.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	
	 @Query(value = "SELECT * FROM USERS WHERE username = ?1", nativeQuery = true)
	  User findByUsername(String username);

}
