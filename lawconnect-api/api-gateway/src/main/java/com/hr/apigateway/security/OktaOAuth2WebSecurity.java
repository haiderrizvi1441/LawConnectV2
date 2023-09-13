package com.hr.apigateway.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.reactive.config.EnableWebFlux;

@Configuration
@EnableWebFlux
public class OktaOAuth2WebSecurity {
    
    @Deprecated
    public SecurityWebFilterChain securityFilterChain(ServerHttpSecurity http){
        http.authorizeExchange()
            .anyExchange().authenticated()
            .and()
            .oauth2Login()
            .and()
            .oauth2ResourceServer()
            .jwt();

            return http.build();
    }

}
