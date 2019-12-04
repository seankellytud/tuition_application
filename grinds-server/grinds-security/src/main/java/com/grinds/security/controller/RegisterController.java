package com.grinds.security.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.models.UserEntity;
import com.grinds.models.utility.UriConstructor;
import com.grinds.services.UserService;

/**
 * @author cristian suia
 *
 */
@RestController
@CrossOrigin(origins="*", maxAge=3600)
public class RegisterController {
	private static final Logger logger = LoggerFactory.getLogger(RegisterController.class);
	private static final String PATH = UriConstructor.BASE+UriConstructor.APIVERSION+UriConstructor.REGISTRATION;

    @Autowired
    private UserService userService;
    
    /**
     * Used to register users with the system
     * Needs a separate rest resource URI as it's allowed through the security filter 
     *
     */
    @PostMapping(value=PATH, consumes={"application/json"}, produces={"application/json"})
	@ResponseStatus(HttpStatus.OK)
	public void registerUser(@Valid @RequestBody UserEntity user) {
		userService.save(user);
	}
    /**
     * used to validate username
     * added here as it needs to be allowed through the security filter
     *
     */
    @RequestMapping(value=PATH, method= RequestMethod.POST, params={"username"})
	public boolean systemHasUsername(@RequestParam("username")String username) {
    	logger.info("UserController --> systemHasUsername");
		return userService.systemHasUsername(username);
	}
    
}

