package com.grinds.models;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grinds.model.api.Grind;
import com.grinds.model.api.GrindType;
import com.grinds.models.utility.EntityDataConverters.GrindTypeConverter;

@Entity(name = "GrindEntity")
@Table(name = "t_grinds")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class GrindEntity implements Grind{
	
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
	
	@Override
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Override
	public GrindType getGrindType() {
		return grindType;
	}
	public void setGrindType(GrindType grindType) {
		this.grindType = grindType;
	}
	@Override
	public BigDecimal getPricePerHour() {
		return pricePerHour;
	}
	public void setPricePerHour(BigDecimal pricePerHour) {
		this.pricePerHour = pricePerHour;
	}
	@Override
	public String getGrindAddress() {
		return grindAddress;
	}
	public void setAddress(String grindAddress) {
		this.grindAddress = grindAddress;
	}
		
}
