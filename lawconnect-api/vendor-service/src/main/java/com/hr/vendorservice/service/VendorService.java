package com.hr.vendorservice.service;

import com.hr.vendorservice.entity.Vendor;
import com.hr.vendorservice.model.VendorRequest;

public interface VendorService {

    long addVendor(VendorRequest vendorRequest);

    void addNewVendor(Vendor vendor);

    
    
    
}
