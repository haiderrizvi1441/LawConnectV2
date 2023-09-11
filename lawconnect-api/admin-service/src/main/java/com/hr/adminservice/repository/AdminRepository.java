package com.hr.adminservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hr.adminservice.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    

}
