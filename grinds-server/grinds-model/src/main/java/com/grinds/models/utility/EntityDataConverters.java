package com.grinds.models.utility;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import com.grinds.model.api.GrindType;
import com.grinds.model.api.UserRole;

public final class EntityDataConverters {
	
	/**
	 * Prevent instantiation
	 */
	private EntityDataConverters() {
	}

	public abstract static class BaseConverterAdapter<X, Y> implements AttributeConverter<X, Y> {

		/**
		 *
		 * @see javax.persistence.AttributeConverter#convertToEntityAttribute(java.lang.Object)
		 */
		@Override
		public X convertToEntityAttribute(Y dbData) {
			return dbData != null ? convertToEntityValue(dbData) : null;
		}

		protected abstract X convertToEntityValue(Y dbData);

		/**
		 *
		 * @see javax.persistence.AttributeConverter#convertToDatabaseColumn(java.lang.Object)
		 */
		@Override
		public Y convertToDatabaseColumn(X attribute) {
			return attribute != null ? convertToDatabaseValue(attribute) : null;
		}

		protected abstract Y convertToDatabaseValue(X attribute);

	}

	@Converter
	public static final class BooleanConverter extends BaseConverterAdapter<Boolean, String> {

		@Override
		public Boolean convertToEntityAttribute(String dbData) {
			return dbData != null ? BooleanConverter.getBoolean(dbData) : false;
		}

		static boolean getBoolean(String dbData) {
			return "Y".equals(dbData);
		}

		@Override
		protected Boolean convertToEntityValue(String dbData) {
			return getBoolean(dbData);
		}

		@Override
		protected String convertToDatabaseValue(Boolean attribute) {
			return attribute ? "Y" : "N";
		}

	}


	@Converter
	public static final class GrindTypeConverter extends BaseConverterAdapter<GrindType, Integer> {

		@Override
		protected GrindType convertToEntityValue(Integer attribute) {
			return GrindType.getEnumType(attribute);
		}

		@Override
		protected Integer convertToDatabaseValue(GrindType attribute) {
			return attribute.getEntValue();
		}

	}
	
	@Converter
	public static final class UserRoleConverter extends BaseConverterAdapter<UserRole, Integer> {

		@Override
		protected UserRole convertToEntityValue(Integer attribute) {
			return UserRole.getEnumType(attribute);
		}

		@Override
		protected Integer convertToDatabaseValue(UserRole attribute) {
			return attribute.getEntValue();
		}

	}


}
