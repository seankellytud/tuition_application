package com.grinds.services;
import java.util.List;

import org.springframework.stereotype.Component;

import com.grinds.model.api.User;

public interface UserService {
	
	User save(User user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);
    User findById(Long id);

}
