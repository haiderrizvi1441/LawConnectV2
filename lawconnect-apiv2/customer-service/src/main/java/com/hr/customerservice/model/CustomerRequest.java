package com.hr.customerservice.model;

import lombok.Data;

@Data
public class CustomerRequest {
    
    private String firstname;
    private String lastname;
    private String email;
    private String password;

}
