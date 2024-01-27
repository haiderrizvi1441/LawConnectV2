package com.hr.customerservice.model;

import com.hr.customerservice.entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomerResponse {
    
    private long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private UserRole role;


}
