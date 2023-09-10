package com.hr.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hr.userservice.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
