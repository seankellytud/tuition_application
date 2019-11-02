package com.grinds.security.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.model.api.User;
import com.grinds.models.UserEntity;
import com.grinds.services.UserService;

@RestController
@CrossOrigin(origins="*", maxAge=3600)
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;

    @RequestMapping(value="/api/v1/users", method= RequestMethod.GET)
    public List<User> listUser(){
        return userService.findAll();
    }
    
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	@ResponseStatus(HttpStatus.OK)
	public void createUser(@RequestBody UserEntity user) {
		userService.save(user);
	}
	
    @RequestMapping(value="/api/v1/user", method= RequestMethod.GET)
	public User get(@RequestParam("username")String username) {
		return userService.findByUsername(username);
	}
    
    @DeleteMapping(value="/api/v1/delete")
    public void deleteById(@RequestParam("id")String id) {
    	logger.info("UserController --> deleteById");
    	long delId = Long.parseLong(id);
    	userService.delete(delId);
    }
    
    @RequestMapping(value="/api/v1/update", method= RequestMethod.POST)
	public void updateUser(@RequestBody UserEntity user) {
    	logger.info("UserController --> updateUser");
		userService.updateUser(user);
	}
    
    
}
