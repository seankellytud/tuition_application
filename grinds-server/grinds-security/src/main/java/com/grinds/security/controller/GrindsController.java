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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.model.api.Grind;
import com.grinds.models.GrindEntity;
import com.grinds.models.UserEntity;
import com.grinds.models.utility.SecurityEscapeUtil;
import com.grinds.models.utility.UriConstructor;
import com.grinds.services.GrindService;


@RestController
@CrossOrigin(origins="*", maxAge=3600)
public class GrindsController{
	private static final Logger logger = LoggerFactory.getLogger(GrindsController.class);
	//PATH = /api/v1/grinds
	private static final String PATH = UriConstructor.BASE+UriConstructor.APIVERSION+UriConstructor.GRIND;
	
	@Autowired
	private GrindService grindService;
	
	public GrindsController() {}
	
	/**
	* Get all grind list.
	*
	* @return the list
	*/
	@GetMapping(value=PATH, consumes={"application/json"}, produces={"application/json"})
	public List<Grind> grindList(){
		logger.info("GrindController --> grindList "+PATH);
		return grindService.findAll();
	}
	
	/**
	* Retrieving grind list by username, assuming username is unique.
	*
	* @return the list of grinds
	*/
	@GetMapping(value=PATH, params={"username"}, consumes={"application/json"}, produces={"application/json"})
	public List<Grind> grindListByUsername(@RequestParam("username")String username){
		logger.info("GrindController --> grindListByUsername "+PATH+" "+username);
		return grindService.grindListByUsername(SecurityEscapeUtil.cleanIt(username));
	}
	
	/**
	* Retrieving grind by id.
	*
	* @return the grind
	*/
	@GetMapping(value=PATH, params={"id"}, consumes={"application/json"}, produces={"application/json"})
	public Grind grindById(@RequestParam("id")long id){
		logger.info("GrindController --> grindListByUsername "+PATH+" "+id);
		return grindService.findGrindById(id);
	}
	
	/**
	* Create grind.
	*
	* @param grind
	* 
	*/
	@PostMapping(value=PATH, consumes={"application/json"})
	@ResponseStatus(HttpStatus.OK)
	public void createGrind( @RequestBody GrindEntity grind) {
		grindService.save(grind);
	}
	/**
	* Update grind.
	*
	* @return the updated grind
	*/
	@PutMapping(value=PATH, params={"id"}, consumes={"application/json"}, produces={"application/json"})
	 public Grind updateGrind(@RequestParam(value = "id") long grindId, @Valid @RequestBody Grind grindDetails) {
	    return grindService.updateGrind(grindId, grindDetails);
	}
	
	/**
	* Update grind.
	*
	* @return the updated grind
	*/
	@DeleteMapping(value=PATH, params={"id"}, consumes={"application/json"})
	 public void deleteGrind(@RequestParam(value = "id") long grindId) {
	    grindService.delete(grindId);
	}
	
		
}
