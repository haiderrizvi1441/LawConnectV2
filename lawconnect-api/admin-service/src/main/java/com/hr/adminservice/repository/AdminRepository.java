package com.hr.adminservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hr.adminservice.entity.Admin;
import com.hr.adminservice.entity.UserRole;


public interface AdminRepository extends JpaRepository<Admin, Long> {
    
    Optional<Admin> findOneByEmailAndPassword(String email, String password);
    Admin findByEmail(String email);

    void deleteByRole(UserRole role);

}
