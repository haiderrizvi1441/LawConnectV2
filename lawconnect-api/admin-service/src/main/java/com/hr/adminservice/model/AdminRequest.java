package com.hr.adminservice.model;

import lombok.Data;

@Data
public class AdminRequest {
    
    private String firstname;
    private String lastname;
    private String email;
    private String password;
}
