package com.hr.userservice.model;

import com.hr.userservice.entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponse {
    
    private long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private UserRole role;


}
