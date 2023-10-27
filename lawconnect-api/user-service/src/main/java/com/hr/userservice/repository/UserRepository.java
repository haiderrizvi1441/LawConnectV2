package com.hr.userservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hr.userservice.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

    Optional<User> findOneByEmailAndPassword(String email, String password);
    User findByEmail(String email);
    
}
