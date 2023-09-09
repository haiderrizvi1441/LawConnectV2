package com.hr.vendorservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hr.vendorservice.entity.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
    


}
