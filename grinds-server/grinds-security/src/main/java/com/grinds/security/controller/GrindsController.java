package com.grinds.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.grinds.api.ControllerGrinds;
import com.grinds.model.api.Grind;
import com.grinds.models.GrindEntity;
import com.grinds.models.repositories.GrindRepository;
import com.grinds.services.GrindService;


@RestController
@CrossOrigin(origins="*", maxAge=3600)
public class GrindsController implements ControllerGrinds{
	
	@Autowired
	private GrindService grindService;
	
	public GrindsController() {}
	
	@RequestMapping(value = "/api/v1/grinds", method = RequestMethod.GET)
	public List<Grind> grindList(){
		return grindService.findAll();
	}
	
	@RequestMapping(value = "/api/v1/grinds", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void createGrind(@RequestBody GrindEntity grind) {
		grindService.save(grind);
	}
	
	@GetMapping("/{id}")
	public Grind get(@PathVariable("id")long id) {
		return grindService.findById(id);
	}

}