package com.grinds.services;

import java.util.List;

import com.grinds.model.api.Grind;

public interface GrindService {
	

	Grind save(Grind user);
    List<Grind> findAll();
    void delete(long id);
    Grind findById(Long id);

}
