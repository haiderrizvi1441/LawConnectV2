package com.hr.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.circuitbreaker.resilience4j.Resilience4JCircuitBreakerFactory;
import org.springframework.cloud.circuitbreaker.resilience4j.Resilience4JConfigBuilder;
import org.springframework.cloud.client.circuitbreaker.Customizer;
import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.context.annotation.Bean;

import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig;
import reactor.core.publisher.Mono;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)

public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
		System.out.println("API GATEWAY IS RUNNING FOR THE LAW CONNECT");
	}



	// LIMITER Configuration
	@Bean
	KeyResolver userKeyResolver(){
		return exchange -> Mono.just("userKey");
	}

	// Circuit Breaker Customization
	
	public Customizer<Resilience4JCircuitBreakerFactory> defaultCustomizer(){
		return factory -> factory.configureDefault(
			id -> new Resilience4JConfigBuilder(id)
					.circuitBreakerConfig(
						CircuitBreakerConfig.ofDefaults()
					).build()
		);
	}
}