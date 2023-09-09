package com.hr.vendorservice.service;


import com.hr.vendorservice.model.VendorRequest;
import com.hr.vendorservice.model.VendorResponse;

public interface VendorService {

    long addVendor(VendorRequest vendorRequest);

    VendorResponse getVendorById(long id);


    
    
    
}
