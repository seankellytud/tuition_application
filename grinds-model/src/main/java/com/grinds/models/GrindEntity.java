package com.grinds.models;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grinds.models.enums.GrindType;
import com.grinds.models.utility.EntityDataConverters.GrindTypeConverter;

@Entity(name = "GrindEntity")
@Table(name = "t_grinds")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class GrindEntity {
	
	@Id//may need to add the generated annotation
	@Column(name = "GRIND_ID")
	private long id;
	@Column(name = "GRIND_TYPE")
	@Convert(converter = GrindTypeConverter.class)
	private GrindType grindType;
	@Column(name = "PRICE_PER_HOUR")
	private BigDecimal pricePerHour;
	@Column(name = "GRIND_ADDRESS")
	private String grindAddress;
	@Column(name = "GRIND_LEVEL")// NOT SHOWING ON FRONT END
	private String grindLevel;
	
	
	
	public String getGrindLevel() {
		return grindLevel;
	}
	public void setGrindLevel(String grindLevel) {
		this.grindLevel = grindLevel;
	}
	public void setGrindAddress(String grindAddress) {
		this.grindAddress = grindAddress;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public GrindType getGrindType() {
		return grindType;
	}
	public void setGrindType(GrindType grindType) {
		this.grindType = grindType;
	}
	public BigDecimal getPricePerHour() {
		return pricePerHour;
	}
	public void setPricePerHour(BigDecimal pricePerHour) {
		this.pricePerHour = pricePerHour;
	}
	public String getGrindAddress() {
		return grindAddress;
	}
	public void setAddress(String grindAddress) {
		this.grindAddress = grindAddress;
	}
		
}
