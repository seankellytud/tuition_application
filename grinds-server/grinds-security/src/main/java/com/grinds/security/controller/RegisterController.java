package com.grinds.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.models.UserEntity;
import com.grinds.services.UserService;

@RestController
@RequestMapping("/api/v1/register")
@CrossOrigin(origins="*", maxAge=3600)
public class RegisterController {

    @Autowired
    private UserService userService;
    
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	@ResponseStatus(HttpStatus.OK)
	public void createUser(@RequestBody UserEntity user) {
		userService.save(user);
	}
}

