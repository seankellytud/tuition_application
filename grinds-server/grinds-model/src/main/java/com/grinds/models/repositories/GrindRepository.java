package com.grinds.models.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.grinds.models.GrindEntity;

@Repository
public interface GrindRepository extends JpaRepository<GrindEntity, Long>  {
	//https://stackoverflow.com/questions/52791121/is-java-spring-jpa-native-query-sql-injection-proof
	//String sql = "SELECT u FROM User u WHERE id=" + id; //BAD 
	@Query(value = "SELECT * FROM T_GRIND WHERE username = ?1", nativeQuery = true)
	 List<GrindEntity> findByUsername(String username);
	
	@Query(value = "SELECT * FROM T_GRIND WHERE id = ?1", nativeQuery = true)
	 GrindEntity findById(long id);
	

}
