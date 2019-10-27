package com.grinds.model.api;

public interface User {
	public long getId();
	
	public String getFirstName();
	
	public String getLastName();
	
	public String getUsername();
	
	public String getPassword();
	
	public String getEmailAddress();
	
	public void setFirstName(String firstName);

	public void setLastName(String lastName);
	
	public void setUsername(String username);
	
	public void setPassword(String password);
	
	public void setEmailAddress(String emailAddress);
	
}
