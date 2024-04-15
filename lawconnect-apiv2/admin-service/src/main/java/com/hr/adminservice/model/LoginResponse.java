package com.hr.adminservice.model;

import com.hr.adminservice.entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginResponse {
    
    private String message;
    private Boolean status;
    private long id;
    private UserRole role;

}
