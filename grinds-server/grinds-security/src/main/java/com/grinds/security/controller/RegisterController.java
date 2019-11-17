package com.grinds.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.models.UserEntity;
import com.grinds.models.utility.UriConstructor;
import com.grinds.services.UserService;

@RestController
@CrossOrigin(origins="*", maxAge=3600)
public class RegisterController {
	
	private static final String PATH = UriConstructor.BASE+UriConstructor.APIVERSION+UriConstructor.REGISTRATION;

    @Autowired
    private UserService userService;
    
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @RequestMapping(value=PATH, method= RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void createUser(@RequestBody UserEntity user) {
		userService.save(user);
	}
}

