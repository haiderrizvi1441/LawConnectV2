package com.hr.adminservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AdminResponse {
    
    private long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
}
