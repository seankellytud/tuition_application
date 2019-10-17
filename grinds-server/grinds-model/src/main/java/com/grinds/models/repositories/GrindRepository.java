package com.grinds.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.grinds.models.GrindEntity;

@Repository
public interface GrindRepository extends JpaRepository<GrindEntity, Long>  {

}
