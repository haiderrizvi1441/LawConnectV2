package com.hr.vendorservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr.vendorservice.entity.Vendor;
import com.hr.vendorservice.model.VendorRequest;
import com.hr.vendorservice.repository.VendorRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class VendorServiceImpl implements VendorService {
    // Injecting Repo
    @Autowired
    private VendorRepository vendorRepository;


    @Override
    public long addVendor(VendorRequest vendorRequest) {
        log.info("Adding Vendor......");
        // Converting From Model to Entity(VendorRequest -> Vendor)
        Vendor vendor = Vendor.builder()
                        .firstname(vendorRequest.getFirstname())
                        .lastname(vendorRequest.getLastname())
                        .email(vendorRequest.getEmail())
                        .password(vendorRequest.getPassword())
                        .build();

        // Saving the vendor in DataBase through JPARepo
        vendorRepository.save(vendor);

        log.info("Vendor Created");

        // Return the Vendor Id as per the controller requirement
        return vendor.getId();
    }


    @Override
    public void addNewVendor(Vendor vendor) {
        vendorRepository.save(vendor);
        System.out.println("Vendor is being Created");
    }
    
 
    

}
