package com.hr.apigateway.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallbackController {
    
    @GetMapping("/vendorServiceFallBack")
    public String vendorServiceFallBack(){
        return "Vendor Service is Down!";
    }

    @GetMapping("/userServiceFallBack")
    public String userServiceFallBack(){
        return "User Service is Down!";
    }

    @GetMapping("/adminServiceFallBack")
    public String adminServiceFallBack(){
        return "Admin Service is Down!";
    }
}
