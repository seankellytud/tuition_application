package com.collegeproject.grinds.service;

import com.collegeproject.grinds.models.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}