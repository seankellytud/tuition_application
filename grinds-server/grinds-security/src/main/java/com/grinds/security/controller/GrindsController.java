package com.grinds.security.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.grinds.api.ControllerGrinds;
import com.grinds.model.api.Grind;
import com.grinds.models.utility.UriConstructor;
import com.grinds.services.GrindService;


@RestController
@CrossOrigin(origins="*", maxAge=3600)
public class GrindsController implements ControllerGrinds{
	private static final Logger logger = LoggerFactory.getLogger(GrindsController.class);
	private static final String PATH = UriConstructor.BASE+UriConstructor.APIVERSION+UriConstructor.GRIND;
	
	@Autowired
	private GrindService grindService;
	
	public GrindsController() {}
	
	@RequestMapping(value = PATH, method = RequestMethod.GET)
	public List<Grind> grindList(){
		logger.info("GrindController --> grindList "+PATH);
		return grindService.findAll();
	}
	
	@RequestMapping(value = "/api/v1/grinds", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void createGrind(@RequestBody Grind grind) {
		grindService.save(grind);
	}
	
	@RequestMapping(value = PATH, method = RequestMethod.GET, params={"id"}, consumes = "application/json", produces = "application/json")
	public Grind get(@RequestParam("id")long id) {
		return grindService.findById(id);
	}
	
}
