package com.grinds.security.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.model.api.User;
import com.grinds.models.utility.UriConstructor;
import com.grinds.security.model.JwtRequest;
import com.grinds.security.model.JwtResponse;
import com.grinds.security.utils.JwtTokenUtil;
import com.grinds.services.UserService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
	private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationController.class);
	private static final String PATH = UriConstructor.BASE+UriConstructor.APIVERSION+UriConstructor.AUTHENTICATION;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private UserService userService;

	@RequestMapping(value = PATH, method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		try {
			authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		}catch(StackOverflowError e) {
			logger.error("JwtAuthenticationController --> error "+e);
		}
		final UserDetails userDetails = userService.findUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			User user = userService.findByUsernameAndPassword(username, password);
		     
           if (user == null) {
               throw new BadCredentialsException("User not found.");
           }
    
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		}catch (LockedException e1) {
			throw new Exception("USER_LOCKED", e1);
		}  
	}
}
