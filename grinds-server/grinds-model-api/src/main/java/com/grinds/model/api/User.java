package com.grinds.model.api;

public interface User {
	public long getId();
	
	public String getFirstName();
	
	public String getLastName();
	
	public String getUsername();
	
	public String getPassword();
	
	public String getEmailAddress();
	
	public UserRole getUserRole();
	
	public String getOcupation();
	
	public String getTeachingExperience();
	
	public void setFirstName(String firstName);

	public void setLastName(String lastName);
	
	public void setUsername(String username);
	
	public void setPassword(String password);
	
	public void setEmailAddress(String emailAddress);
	
	public void setUserRole(UserRole userRole);
	
	public void setOcupation(String ocupation);
	
	public void setTeachingExperience(String teachingExperience);
	
}
