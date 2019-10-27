package com.grinds.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grinds.model.api.Grind;
import com.grinds.model.api.User;
import com.grinds.models.GrindEntity;
import com.grinds.models.UserEntity;
import com.grinds.models.repositories.GrindRepository;
import com.grinds.services.GrindService;

@Service
public class GrindServiceImpl implements GrindService{
	private static final Logger logger = LoggerFactory.getLogger(GrindServiceImpl.class);
	
	@Autowired
	private GrindRepository grindRepo;
	
    
    @SuppressWarnings("unchecked")
	public List<Grind> findAll() {
		List list = new ArrayList<Grind>();
		grindRepo.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(long id) {
		grindRepo.deleteById(id);
	}


	@Override
	public Grind findById(Long id) {
		return null;
	}

	@Override
    public Grind save(Grind grind) {
		logger.info("GrindServiceImpl --> save");
	    GrindEntity newGrind = new GrindEntity();
	    newGrind.setAddress(grind.getGrindAddress());
	    newGrind.setGrindType(grind.getGrindType());
	    newGrind.setPricePerHour(grind.getPricePerHour());
	    logger.info("UserServiceImpl --> save user"+grind);
        return (Grind) grindRepo.save(newGrind);
    }

}
