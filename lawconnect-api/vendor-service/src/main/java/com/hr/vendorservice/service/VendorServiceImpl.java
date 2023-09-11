package com.hr.vendorservice.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr.vendorservice.entity.Vendor;
import com.hr.vendorservice.exception.VendorServiceCustomException;
import com.hr.vendorservice.model.VendorRequest;
import com.hr.vendorservice.model.VendorResponse;
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
    

    // Getting Vendors By id
    @Override
    public VendorResponse getVendorById(long id) {
        log.info("Searching For the Vendor Id: {}",id);
        // Getting Vendor 
        Vendor vendor = vendorRepository.findById(id).orElseThrow(() -> new VendorServiceCustomException("Vendor with Given Id Does not exist , please check again.", "VENDOR_NOT_FOUND"));

        // Vendor -> VendorResponse
        VendorResponse vendorResponse = new VendorResponse();

        // Copying Properties using BeanUtils
        BeanUtils.copyProperties(vendor, vendorResponse);

        return vendorResponse;
    }

    // Getting all vendors 
    @Override
    public List<VendorResponse> getAllVendors() {
        List<Vendor> vendors = vendorRepository.findAll();
        log.info("Getting all Vendors");
        // Converting from Vendor to VendorResponse
        List<VendorResponse> vendorResponses = vendors.stream()
                                                        .map(this::toVendorResponse)
                                                        .collect(Collectors.toList());
        log.info("All Vendors Retreived");                                             
        return vendorResponses;
    }

    // Helper Function to convert Vendor -> VendorResponse
    private VendorResponse toVendorResponse(Vendor vendor){
        VendorResponse vendorResponse = VendorResponse.builder()
                                        .id(vendor.getId())
                                        .firstname(vendor.getFirstname())
                                        .lastname(vendor.getLastname())
                                        .email(vendor.getEmail())
                                        .password(vendor.getPassword())
                                        .build();

        return vendorResponse;
    }

    // Updating vendor by Id
    @Override
    public Vendor updateVendorById(long id, VendorRequest vendorRequest) {
        log.info("Retrieving the Vendor by Id: {}", id);
        Vendor vendor = vendorRepository.findById(id).get();
        // Setting the stored entity properites using the vendorRequest Model Client has given
        vendor.setFirstname(vendorRequest.getFirstname());
        vendor.setLastname(vendorRequest.getLastname());
        vendor.setEmail(vendorRequest.getEmail());
        vendor.setPassword(vendorRequest.getPassword());

        // Saving the update Entity back to Repo
        vendorRepository.save(vendor);

        return vendor;
    }


    @Override
    public String deleteVendorById(long id) {
        log.info("Retrieving the Vendor ID: {}",id);
        vendorRepository.deleteById(id);
        log.info("Vendor Deleted Successfully");
        
        return "Vendor Deleted Successfully";
        
    }

    
    

    


    

}
