package com.grinds.models.enums;

import java.util.HashMap;

public enum GrindType implements EnumConverter {
	MATHEMATICS(1, "MATHEMATICS"), ENGLISH(2, "ENGLISH"), SPANISH(3,"SPANISH"), MUSIC(4,"MUSIC"), IRISH(5,"IRISH"), BIOLOGY(6,"BIOLOGY"), CHEMISTRY(7,"CHEMISTRY"), PHYSICS(8, "PHYSICS");
	
	private static HashMap<Integer, GrindType> map = new HashMap<Integer, GrindType>();

	static {
		map.put(MATHEMATICS.getEntValue(), MATHEMATICS);
		map.put(ENGLISH.getEntValue(), ENGLISH);
		map.put(SPANISH.getEntValue(), SPANISH);
		map.put(MUSIC.getEntValue(), MUSIC);
		map.put(IRISH.getEntValue(), IRISH);
		map.put(BIOLOGY.getEntValue(), BIOLOGY);
		map.put(CHEMISTRY.getEntValue(), CHEMISTRY);
		map.put(PHYSICS.getEntValue(), PHYSICS);
	}

	private int entValue;
	private String entName;

	GrindType(int entVal, String entNm) {
		this.entName = entNm;
		this.entValue = entVal;
	}

	@Override

	public String toString() {
		return entName;
	}

	public int getEntValue() {
		return entValue;
	}

	public String convert() {
		return String.valueOf(entValue);
	}

	public static GrindType getEnumType(int entValue) {
		GrindType result = map.get(entValue);
		if (result == null) {
			throw new IllegalArgumentException("There is no GrindType for entValue=" + entValue);
		}
		return result;
	}
	
}
