package com.collegeproject.grinds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.collegeproject.grinds.models.GrindEntity;

public interface GrindRepository extends JpaRepository<GrindEntity, Long> {

}
