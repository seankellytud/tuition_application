package com.collegeproject.grinds.models;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Grind {
	
	@Id//may need to add the generated annotation
	private long id;
//	private GrindType grindType;
	private BigDecimal price;
	private String address;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
//	public GrindType getGrindType() {
//		return grindType;
//	}
//	public void setGrindType(GrindType grindType) {
//		this.grindType = grindType;
//	}
	public BigDecimal price() {
		return price;
	}
	public void setGrindPricePerHour(BigDecimal price) {
		this.price = price;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
		
}
