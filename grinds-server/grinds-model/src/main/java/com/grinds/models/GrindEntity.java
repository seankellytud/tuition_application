package com.grinds.models;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;

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
	@NotNull
	@Convert(converter = GrindTypeConverter.class)
	private GrindType grindType;
	
	@Column(name = "PRICE_PER_HOUR")
	@NotNull
	@DecimalMin(value = "0.0", inclusive = false)
    @Digits(integer=3, fraction=2)
	private BigDecimal pricePerHour;
	
	@Column(name = "BUILDING_NO")
	@NotNull
	private String buildingNo;
	
	@Column(name = "STREET_ADDRESS")
	@NotNull
	private String grindAddress;
	
	@Column(name = "COUNTY")
	@NotNull
	private String county;
	
	@Column(name = "EIRCODE")
	@NotNull
	private String eircode;


	
	@Override
	public long getId() {
		return id;
	}
	public String getBuildingNo() {
		return buildingNo;
	}
	public void setBuildingNo(String buildingNo) {
		this.buildingNo = buildingNo;
	}
	public String getCounty() {
		return county;
	}
	public void setCounty(String county) {
		this.county = county;
	}
	public String getEircode() {
		return eircode;
	}
	public void setEircode(String eircode) {
		this.eircode = eircode;
	}
	
	public String getGrindAddress() {
		return grindAddress;
	}
	public void setGrindAddress(String grindAddress) { //Street Name
		this.grindAddress = grindAddress;
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

		
}
