package com.hr.adminservice.Config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebMvcConfig implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Apply CORS configuration to specific paths
            .allowedOrigins("*")
            .allowedMethods("GET","POST","DELETE","PUT");
    }

}
