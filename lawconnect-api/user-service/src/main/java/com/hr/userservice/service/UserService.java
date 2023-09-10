package com.hr.userservice.service;

import java.util.List;

import com.hr.userservice.model.UserRequest;
import com.hr.userservice.model.UserResponse;

public interface UserService {

    long addUser(UserRequest userRequest);

    UserResponse getUserById(long id);

    List<UserResponse> getAllUsers();
    
    
}
