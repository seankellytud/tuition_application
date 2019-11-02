package com.grinds.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.WebApplicationInitializer;

/**
 * @author cristian suia
 *This is the spring boot starting point(main method)
 *Components scan, JpaRepositories scan, Entities scan annotations need to be added here for spring boot to know where to scan for components
 */
@ComponentScan({"com.grinds.services", "com.grinds.security", "com.grinds.controller"})
@EnableJpaRepositories(basePackages = {"com.grinds.models.repositories"})
@EntityScan("com.grinds")
@SpringBootApplication
public class GrindsApplication extends SpringBootServletInitializer implements WebApplicationInitializer {

	// java main method of the application, needed to run the application
	public static void main(String[] args) {
		SpringApplication.run(GrindsApplication.class, args);
	}

}
