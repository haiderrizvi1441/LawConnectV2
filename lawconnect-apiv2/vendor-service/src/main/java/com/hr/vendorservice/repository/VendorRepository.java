package com.hr.vendorservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hr.vendorservice.entity.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {

    Optional<Vendor> findOneByEmailAndPassword(String email, String password);
    Vendor findByEmail(String email);
    

}
