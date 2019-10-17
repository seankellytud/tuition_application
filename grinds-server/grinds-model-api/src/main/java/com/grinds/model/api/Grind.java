package com.grinds.model.api;

import java.math.BigDecimal;

public interface Grind {
	public long getId();
	public GrindType getGrindType();
	public BigDecimal getPricePerHour();
	public String getGrindAddress();
}
