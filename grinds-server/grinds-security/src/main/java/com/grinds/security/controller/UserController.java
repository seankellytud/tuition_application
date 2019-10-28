package com.grinds.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.model.api.User;
import com.grinds.models.UserEntity;
import com.grinds.services.UserService;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins="*", maxAge=3600)
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> listUser(){
        return userService.findAll();
    }
    
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	@ResponseStatus(HttpStatus.OK)
	public void createUser(@RequestBody UserEntity user) {
		userService.save(user);
	}
	
//	@GetMapping("/{id}")
//	public GrindEntity get(@PathVariable("id")long id) {
//		return grindRepository.getOne(id);
//	}
}
