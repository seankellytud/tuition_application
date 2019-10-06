package com.collegeproject.grinds.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.collegeproject.grinds.models.GrindEntity;
import com.collegeproject.grinds.repositories.GrindRepository;

@RestController
@RequestMapping("/api/v1/grinds")
public class GrindsController {
	@Autowired
	private GrindRepository grindRepository;
	
	@GetMapping
	public List<GrindEntity> grindList(){
		return grindRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void createGrind(@RequestBody GrindEntity grind) {
		grindRepository.save(grind);
	}
	
	@GetMapping("/{id}")
	public GrindEntity get(@PathVariable("id")long id) {
		return grindRepository.getOne(id);
	}

}
