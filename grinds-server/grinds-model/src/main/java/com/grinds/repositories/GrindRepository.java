package com.grinds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grinds.models.GrindEntity;

public interface GrindRepository extends JpaRepository<GrindEntity, Long> {

}
