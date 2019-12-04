package com.grinds.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.grinds.handlers.RecordNotFoundException;
import com.grinds.model.api.User;
import com.grinds.models.UserEntity;
import com.grinds.models.repositories.UserRepository;
import com.grinds.services.UserService;

/**
 * @author cristian
 * Service (see @Service annotation) that implements methods declared in the UserService interface 
 *
 */
@Service
public class UserServiceImpl implements UserService {
	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;

	//returns all grinds entities by making a call to repository, the repository communicates with the database
	@Override
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
		if(myUser == null)
			throw new RecordNotFoundException("Invalid username : " + username);
		logger.info("UserServiceImpl --> findByUserName found "+myUser.toString());
		return userRepo.findByUsername(username);
	}

	@Override
    public User save(User user) {
		logger.info("UserServiceImpl --> save");
	    UserEntity newUser = new UserEntity();
	    newUser.setUsername(user.getUsername());
	    newUser.setFirstName(user.getFirstName());
	    newUser.setLastName(user.getLastName());
	    newUser.setEmailAddress(user.getEmailAddress());
	    newUser.setUserRole(user.getUserRole());
	    newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
	    if(user.getTeachingExperience() != null)
	    	newUser.setTeachingExperience(user.getTeachingExperience());
	    if(user.getOcupation() != null)
	    	newUser.setOcupation(user.getOcupation());
	    logger.info("UserServiceImpl --> save user"+user);
        return (User) userRepo.save(newUser);
    }

	@Override
	public UserDetails findUserByUsername(String username) {
		UserDetails user = userRepo.findUserByUsername(username);
		if(user == null)
			throw new RecordNotFoundException("Invalid username : " + username);
		return user;
	}

	@Override
	public User findById(long id) {
		logger.info("UserServiceImpl --> findById");
		User foundUser = this.userRepo.findById(id);
		if(foundUser == null)
			throw new RecordNotFoundException("Invalid user id : " + id);
		return foundUser;
	}

	@Override
	public void updateUser(User user) {
		UserEntity updateUser = this.userRepo.findById(user.getId());
		if(updateUser == null)
			throw new RecordNotFoundException("Invalid user : " + user.getId());
		updateUser.setFirstName(user.getFirstName());
		updateUser.setLastName(user.getLastName());
		updateUser.setUsername(user.getUsername());
		updateUser.setEmailAddress(user.getEmailAddress());
		 if(user.getTeachingExperience() != null)
		    	updateUser.setTeachingExperience(user.getTeachingExperience());
		    if(user.getOcupation() != null)
		    	updateUser.setOcupation(user.getOcupation());
		
		this.userRepo.save(updateUser);
	}
	
	@Override
	public User findByUsernameAndPassword(String username, String password) {
		logger.info("UserServiceImpl --> findByUserNameAndPassword ");
		User myUser = userRepo.findByUsername(username);
		if(myUser == null || !bcryptEncoder.matches(password, myUser.getPassword()))
				throw new BadCredentialsException("User not found");
		logger.info("UserServiceImpl --> findByUserName found "+myUser.toString());
		return myUser;
	}
	
	@Override
	public boolean systemHasUsername(String username) {
		return this.userRepo.findByUsername(username) != null;
	}
}
