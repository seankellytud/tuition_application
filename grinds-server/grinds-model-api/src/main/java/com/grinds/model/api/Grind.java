package com.grinds.model.api;

import java.math.BigDecimal;

public interface Grind {
	public long getId();
	public GrindType getGrindType();
	public BigDecimal getPricePerHour();
	public String getBuildingNo();
	public String getStreet();//Street Name
	public String getCounty();
	public String getEircode();
	public String getUsername();
	public void setBuildingNo(String buildingNo);
	public void setCounty(String county);
	public void setEircode(String eircode);
	public void setStreet(String street); //Street Name
	public void setId(long id);
	public void setGrindType(GrindType grindType);
	public void setPricePerHour(BigDecimal pricePerHour);
	public void setUsername(String username);
	
}

