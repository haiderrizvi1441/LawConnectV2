package com.hr.skillservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SkillServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkillServiceApplication.class, args);

		System.out.println("SKILLS SERVICE IS WORKING FINE ");
	}

}
