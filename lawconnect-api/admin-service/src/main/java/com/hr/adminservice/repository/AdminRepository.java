package com.hr.adminservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hr.adminservice.entity.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long> {
    
    Optional<Admin> findOneByEmailAndPassword(String email, String password);
    Admin findByEmail(String email);

}
