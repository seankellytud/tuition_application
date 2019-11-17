package com.grinds.api;

import java.util.List;

import com.grinds.model.api.User;

public interface ControllerUser {
	
    public List<User> listUser();
	public void createUser(User user);
	public User get(String username);
    public void deleteById(String id);
	public void updateUser(User user);
	public boolean systemHasUsername(String username); 

}
