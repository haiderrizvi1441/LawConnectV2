package com.hr.vendorservice.model;

import lombok.Data;

@Data
public class VendorRequest {
    
    private String firstname;
    private String lastname;
    private String email;
    private String password;


}
