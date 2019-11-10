package com.grinds.model.api;

import java.util.HashMap;

public enum UserRole implements EnumConverter {
	ADMIN(1, "ADMIN"), STUDENT(2, "STUDENT"), TEACHER(3,"TEACHER");
	
	private static HashMap<Integer, UserRole> map = new HashMap<Integer, UserRole>();

	static {
		map.put(ADMIN.getEntValue(), ADMIN);
		map.put(STUDENT.getEntValue(), STUDENT);
		map.put(TEACHER.getEntValue(), TEACHER);
	}

	private int entValue;
	private String entName;

	UserRole(int entVal, String entNm) {
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

	public static UserRole getEnumType(int entValue) {
		UserRole result = map.get(entValue);
		if (result == null) {
			throw new IllegalArgumentException("There is no UserRole for entValue=" + entValue);
		}
		return result;
	}
	
}
