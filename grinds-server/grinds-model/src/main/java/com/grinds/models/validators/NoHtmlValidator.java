package com.grinds.models.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import org.owasp.html.HtmlPolicyBuilder;
import org.owasp.html.PolicyFactory;
 
public class NoHtmlValidator implements ConstraintValidator<NoHtml, String> {
 
   // http://owasp-java-html-sanitizer.googlecode.com/svn/trunk/distrib/javadoc/org/owasp/html/HtmlPolicyBuilder.html
   // builder is not thread safe, so make local
   private static final PolicyFactory DISALLOW_ALL = new HtmlPolicyBuilder().toFactory();
 
   @Override
   public void initialize(NoHtml constraintAnnotation)
   {
      // TODO specify the policy as an annotation attribute
      // to use them, values from annotation are stored in private properties here
   }
 
   @Override
   public boolean isValid(String value, ConstraintValidatorContext context)
   {
      String sanitized = DISALLOW_ALL.sanitize(value);
      return sanitized.equals(value);
   }
}
