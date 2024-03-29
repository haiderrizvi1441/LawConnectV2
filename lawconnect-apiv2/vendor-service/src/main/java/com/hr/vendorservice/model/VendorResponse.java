package com.hr.vendorservice.model;

import java.util.ArrayList;
import java.util.List;

import com.hr.vendorservice.entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VendorResponse {

    private long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private UserRole role;
    private List<String> skills = new ArrayList<>();
    
}
