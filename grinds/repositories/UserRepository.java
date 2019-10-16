package com.collegeproject.grinds.repositories;

import com.collegeproject.grinds.models.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository {
User findByUsername(String username);
}