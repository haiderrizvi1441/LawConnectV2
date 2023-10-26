package com.hr.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.google.common.base.Optional;
import com.hr.userservice.entity.User;
import com.hr.userservice.entity.UserRole;

public interface UserRepository extends JpaRepository<User, Long>{

    Optional<User> findOneByEmailAndPassword(String email, String password);
    User findByEmail(String email);
    
}
