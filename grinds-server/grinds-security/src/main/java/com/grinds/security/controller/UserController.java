package com.grinds.security.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.model.api.Grind;
import com.grinds.model.api.User;
import com.grinds.models.UserEntity;
import com.grinds.models.utility.UriConstructor;
import com.grinds.services.UserService;

/**
 * @author cristian suia
 *
 */
@RestController
@CrossOrigin(origins="*", maxAge=3600)
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	private static final String PATH = UriConstructor.BASE+UriConstructor.APIVERSION+UriConstructor.USER;
	
    @Autowired
    private UserService userService;
    
    /**
	* Get all users list.
	*
	* @return the list
	*/
//    @RequestMapping(value=PATH, method= RequestMethod.GET, consumes = "application/json", produces = "application/json")
    @GetMapping(value=PATH, consumes={"application/json"}, produces={"application/json"})
    public List<User> listUser(){
        return userService.findAll();
    }
    
    /**
	* Retrieving user by id.
	*
	* @return the user
	*/
    @GetMapping(value=PATH, params={"id"}, consumes={"application/json"}, produces={"application/json"})
	public Grind userById(@RequestParam("id")long id){
		logger.info("UserController --> userById "+PATH+" "+id);
		return (Grind) userService.findById(id);
	}
    
	/**
	* Retrieving user by username.
	*
	* @return the user
	*/
	@GetMapping(value=PATH, params={"username"}, consumes={"application/json"}, produces={"application/json"})
	public User get(@RequestParam("username")String username) {
		return userService.findByUsername(username);
	}
    
	/**
	* Creates user.
	*
	*
	*/
    @PostMapping(value=PATH, consumes={"application/json"})
	@ResponseStatus(HttpStatus.OK)
	public void createUser(@Valid @RequestBody UserEntity user) {
		userService.save(user);
	}
    
    /**
	* Delete user.
	*
	*/
    @DeleteMapping(value=PATH, params={"id"}, consumes={"application/json"})
    public void deleteById(@RequestParam("id")String id) {
    	logger.info("UserController --> deleteById");
    	long delId = Long.parseLong(id);
    	userService.delete(delId);
    }
    
    /**
	* Update user
	* 
	*/
    @PutMapping(value=PATH, consumes={"application/json"})
	public void updateUser(@Valid @RequestBody UserEntity user) {
    	logger.info("UserController --> updateUser");
		userService.updateUser(user);
	}  
    
}
