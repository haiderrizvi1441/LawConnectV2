package com.hr.userservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.google.common.base.Optional;
import com.hr.userservice.entity.LoginRequest;
import com.hr.userservice.entity.LoginResponse;
import com.hr.userservice.entity.User;
import com.hr.userservice.entity.UserRole;
import com.hr.userservice.exception.UserServiceCustomException;
import com.hr.userservice.model.UserRequest;
import com.hr.userservice.model.UserResponse;
import com.hr.userservice.repository.UserRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class UserServiceImpl implements UserService{

    @Autowired // Dependency Injection
    private UserRepository userRepository;

    
    @Autowired // Injecting password Encoder
    private PasswordEncoder passwordEncoder;

    @Override
    public long addUser(UserRequest userRequest) {
        log.info("Adding User");
        // we get the Model in params , but it wil be stored as Entity 
        User user = User.builder()
                        .firstname(userRequest.getFirstname())
                        .lastname(userRequest.getLastname())
                        .email(userRequest.getEmail())
                        .password(userRequest.getPassword())
                        .role(UserRole.USER)
                        .build();
        
        // Adding the Created Entity to Repo
        userRepository.save(user);
        log.info("User added with id:{}",user.getId());
        return user.getId();
    }

    @Override
    public UserResponse getUserById(long id) {
        log.info("Retreiving User with Id:{}",id);

        // Getting the Entity
        User user = userRepository.findById(id).orElseThrow(() -> new UserServiceCustomException("No User exists with this Id", "USER_NOT_FOUND"));

        // user -> userResponse (Entity -> Model)
        UserResponse userResponse = new UserResponse();
        BeanUtils.copyProperties(user, userResponse);

        log.info("User Found");
        return userResponse;

    }

    // To get the user by Email for Front End Login and Loading HomePage as per the role
    @Override
    public UserResponse getUserByEmail(String email) {

        log.info("Retrieving the user with email:{}", email);
        User user = userRepository.findByEmail(email);
        if (user==null){
            throw new UserServiceCustomException("User with this email is not found", "USER_NOT_FOUND");
        }
        
        // user -> userResponse (Entity -> Model)
        UserResponse userResponse = UserResponse.builder()
                                                .id(user.getId())
                                                .firstname(user.getFirstname())
                                                .lastname(user.getLastname())
                                                .email(user.getEmail())
                                                .password(user.getPassword())
                                                .role(user.getRole())
                                                .build();
        

        log.info("User Found");
        return userResponse;

        
    }
    // FOR LOGIN in Front End
    @Override
    public LoginResponse loginUser(LoginRequest loginRequest) {
        String msg = "";
        User user1 = userRepository.findByEmail(loginRequest.getEmail());
        if(user1 != null){
            String password = loginRequest.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);

            if(isPwdRight){
                Optional<User> user = userRepository.findOneByEmailAndPassword(loginRequest.getEmail(), encodedPassword);

               

            }
        }
    }


    @Override
    public List<UserResponse> getAllUsers() {
        log.info("Retrieving all the users");
        List<User> users = userRepository.findAll();
        // Converting List<Entity> to List<Model>
        List<UserResponse> usersResponses = users.stream()
                                            .map(this::toUserResponse)
                                            .collect(Collectors.toList());
        
        log.info("All users are retrieved sucessfully");
        return usersResponses;
    } 

    // Helper Function to Convert User -> UserResponse (Entity->Model)
    public UserResponse toUserResponse(User user){
        UserResponse userResponse = UserResponse.builder()
                                                .id(user.getId())
                                                .firstname(user.getFirstname())
                                                .lastname(user.getLastname())
                                                .email(user.getEmail())
                                                .password(user.getPassword())
                                                .role(user.getRole())
                                                .build();
        return userResponse;
    }

    @Override
    public void deleteUserbyId(long id) {
        log.info("Deleting user: {}",id);
        userRepository.deleteById(id);

        log.info("User Deleted Successfully");
    }

    @Override
    public User updateUserbyId(UserRequest userRequest, long id) {
        log.info("Retrieving User:{}",id);
        User user = userRepository.findById(id).get();

        // Modifying the properties of Entity from user Request
        user.setFirstname(userRequest.getFirstname());
        user.setLastname(userRequest.getLastname());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());

        
        log.info("User Found, updating User");
        // Updating the entity in Repo
        userRepository.save(user);
        log.info("User Updated Successfully");
        return user;
    }

    
    




}
