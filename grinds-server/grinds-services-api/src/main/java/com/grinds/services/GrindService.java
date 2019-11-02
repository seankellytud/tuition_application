package com.grinds.services;

import java.util.List;
import com.grinds.model.api.Grind;

/**
 * @author cristian
 *Interface for grind service, any methods declared must be implemented in the GrindServiceImpl
 *
 */
public interface GrindService {
	
	Grind save(Grind user);
    List<Grind> findAll();
    void delete(long id);
    Grind findById(Long id);

}
