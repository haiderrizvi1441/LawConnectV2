package com.hr.userservice.service;

import java.util.List;

import com.hr.userservice.entity.LoginRequest;
import com.hr.userservice.entity.LoginResponse;
import com.hr.userservice.entity.User;
import com.hr.userservice.model.UserRequest;
import com.hr.userservice.model.UserResponse;

public interface UserService {

    long addUser(UserRequest userRequest);

    UserResponse getUserById(long id);

    List<UserResponse> getAllUsers();

    void deleteUserbyId(long id);

    User updateUserbyId(UserRequest userRequest, long id);

    UserResponse getUserByEmail(String email);

    LoginResponse loginUser(LoginRequest loginRequest);

    

    
    
    
}
