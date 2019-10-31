package com.grinds.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.grinds.model.api.User;
import com.grinds.models.UserEntity;
import com.grinds.models.repositories.UserRepository;
import com.grinds.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;


	@SuppressWarnings("unchecked")
	public List<User> findAll() {
		List list = new ArrayList<User>();
		userRepo.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(long id) {
		logger.info("UserServiceImpl --> delete ");
		userRepo.deleteById(id);
	}

	@Override
	public User findByUsername(String username) {
		logger.info("UserServiceImpl --> findByUserName "+username);
		User myUser = userRepo.findByUsername(username);
		logger.info("UserServiceImpl --> findByUserName found "+myUser.toString());
		return userRepo.findByUsername(username);
	}

	@Override
	public User findById(Long id) {
		return null;
	}

	@Override
    public User save(User user) {
		logger.info("UserServiceImpl --> save");
	    UserEntity newUser = new UserEntity();
	    newUser.setUsername(user.getUsername());
	    newUser.setFirstName(user.getFirstName());
	    newUser.setLastName(user.getLastName());
	    newUser.setEmailAddress(user.getEmailAddress());
	    newUser.setPassword(bcryptEncoder.encode(user.getPassword()));  
	    logger.info("UserServiceImpl --> save user"+user);
        return (User) userRepo.save(newUser);
    }

	@Override
	public UserDetails findUserByUsername(String username) {
		UserDetails user = userRepo.findUserByUsername(username);
		if(user == null)
			throw new UsernameNotFoundException("User not found with username: " + username);
		return user;
	}
}
