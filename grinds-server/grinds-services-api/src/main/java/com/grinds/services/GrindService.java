package com.grinds.services;

import java.util.List;
import com.grinds.model.api.Grind;

/**
 * @author cristian
 *Interface for grind service, any methods declared must be implemented in the GrindServiceImpl
 *
 */
public interface GrindService {
	
	Grind save(Grind grind);
    List<Grind> findAll();
    void delete(long id);
    List<Grind> grindListByUsername(String username);
    Grind findGrindById(long id);
    Grind updateGrind(long id, Grind grind);

}
