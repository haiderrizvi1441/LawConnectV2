package com.hr.userservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr.userservice.entity.User;
import com.hr.userservice.model.UserRequest;
import com.hr.userservice.model.UserResponse;
import com.hr.userservice.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    
    // Injecting the Service
    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String testing(){
        return "USER SERVICE API is working fine";
    }

    // Adding an User
    @PostMapping("/addUser")
    public ResponseEntity<Long> addUser(@RequestBody UserRequest userRequest){

        long userId = userService.addUser(userRequest);
        return new ResponseEntity<>(userId, HttpStatus.CREATED);

    }

    // Getting the users by id 
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable long id){
        UserResponse userResponse = userService.getUserById(id);
        return new ResponseEntity<>(userResponse, HttpStatus.OK);
    }

    // Get All the users
    @GetMapping("/allUsers")
    public ResponseEntity<List<UserResponse>> getAllUsers(){
        List<UserResponse> usersResponses = userService.getAllUsers();
        return new ResponseEntity<>(usersResponses, HttpStatus.OK);
    }

    // Deleting the user by Id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUserbyId(@PathVariable long id){
        userService.deleteUserbyId(id);
        return new ResponseEntity<>("User Deleted Sucessfully", HttpStatus.OK);
    }

    //Updating the user by id
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUserById(@RequestBody UserRequest userRequest, @PathVariable long id){
        User updatedUser = userService.updateUserbyId(userRequest, id);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }


}
