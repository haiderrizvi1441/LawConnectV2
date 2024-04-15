package com.hr.customerservice.model;

import lombok.Data;

@Data

public class ContactInfoRequest {
    
    private String email;
    
    private String message;
}
