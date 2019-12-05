package com.grinds.models.validators;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Documented
@Constraint(validatedBy = NoHtmlValidator.class)
@Target({ElementType.FIELD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface NoHtml {
    // TODO use a better message, look up ValidationMEssages.properties
    String message() default "{org.myproject.constraints.nohtml}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
