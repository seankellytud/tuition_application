package com.grinds.app;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.WebApplicationInitializer;

@SpringBootApplication
@ComponentScan({"com.grinds"})
@Configuration
@EnableJpaRepositories(basePackages = {"com.grinds.models.repositories"})
@EntityScan("com.grinds")
public class GrindsApplication implements WebApplicationInitializer {

	public static void main(String[] args) {
		SpringApplication.run(GrindsApplication.class, args);
	}

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}
