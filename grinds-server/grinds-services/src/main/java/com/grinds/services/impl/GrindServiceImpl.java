package com.grinds.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grinds.model.api.Grind;
import com.grinds.models.GrindEntity;
import com.grinds.models.repositories.GrindRepository;
import com.grinds.services.GrindService;

/**
 * @author cristian
 * Service (see @Service annotation) that implements methods declared in the GrindService interface 
 *
 */
@Service
public class GrindServiceImpl implements GrindService{
	private static final Logger logger = LoggerFactory.getLogger(GrindServiceImpl.class);
	
	//autowires the repository used to communicate with database
	@Autowired
	private GrindRepository grindRepo;
	
    //returns all grinds entities by making a call to repository, the repository communicates with the database
	@Override
    @SuppressWarnings("unchecked")
	public List<Grind> findAll() {
		List list = new ArrayList<Grind>();
		grindRepo.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	//deletes a grind from the database by calling the repository and passing the grind id as parameter
	@Override
	public void delete(long id) {
		grindRepo.deleteById(id);
	}

	//create a new grind entity and calls the repository to save it in the database
	@Override
    public Grind save(Grind grind) {
		logger.info("GrindServiceImpl --> save");
	    GrindEntity newGrind = new GrindEntity();
	    newGrind.setStreet(grind.getStreet());//Street Name
	    newGrind.setBuildingNo(grind.getBuildingNo());
	    newGrind.setCounty(grind.getCounty());
	    newGrind.setEircode(grind.getEircode());
	    newGrind.setGrindType(grind.getGrindType());
	    newGrind.setPricePerHour(grind.getPricePerHour());
	    newGrind.setUsername(grind.getUsername());
	    
	    logger.info("UserServiceImpl --> save user"+grind);
        return (Grind) grindRepo.save(newGrind);
    }

	@Override
	public List<Grind> grindListByUsername(String username) {
		List list = new ArrayList<Grind>();
		grindRepo.findByUsername(username).iterator().forEachRemaining(list::add);
		return list;
	}
	
	

}
