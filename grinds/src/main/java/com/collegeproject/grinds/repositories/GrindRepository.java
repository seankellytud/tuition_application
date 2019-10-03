package com.collegeproject.grinds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.collegeproject.grinds.models.Grind;

public interface GrindRepository extends JpaRepository<Grind, Long> {

}
