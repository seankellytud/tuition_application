package com.grinds.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.WebApplicationInitializer;

//@SpringBootApplication
//@ComponentScan({"com.grinds", "com.grinds.services"})
//@EnableAutoConfiguration
//@Configuration
//@EnableJpaRepositories(basePackages = {"com.grinds.models.repositories"})
//@EntityScan("com.grinds")
@ComponentScan("com.grinds")
@EnableJpaRepositories(basePackages = {"com.grinds.models.repositories"})
@EntityScan("com.grinds")
@SpringBootApplication(exclude={SecurityAutoConfiguration.class})
//@EnableAutoConfiguration
//@ComponentScan({"com.grinds.services.impl","com.grinds"})
public class GrindsApplication extends SpringBootServletInitializer implements WebApplicationInitializer {

	public static void main(String[] args) {
		SpringApplication.run(GrindsApplication.class, args);
	}

}
