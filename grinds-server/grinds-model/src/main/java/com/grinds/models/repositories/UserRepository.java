package com.grinds.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import com.grinds.models.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	
	 @Query(value = "SELECT * FROM T_USER WHERE username = ?1", nativeQuery = true)
	  UserEntity findByUsername(String username);
	 
	 @Query(value = "SELECT * FROM T_USER WHERE username = ?1", nativeQuery = true)
	 UserDetails findUserByUsername(String username);
	 
	 @Query(value = "SELECT * FROM T_USER WHERE id = ?1", nativeQuery = true)
	  UserEntity findById(long id);
	 //SELECT u FROM User u WHERE u.status = ?1 and u.name = ?2
//	 @Query(value = "SELECT * FROM T_USER WHERE username = ?1" AND  nativeQuery = true)
//	  UserEntity findByUsernameAndPassword(String username, String password);
	 
	 @Query(value = "SELECT * FROM T_USER WHERE username = ?1 and password = ?2",  nativeQuery = true)
	  UserEntity findByUsernameAndPassword(String username, String password);

}
