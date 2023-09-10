package com.hr.vendorservice.service;


import java.util.List;

import com.hr.vendorservice.entity.Vendor;
import com.hr.vendorservice.model.VendorRequest;
import com.hr.vendorservice.model.VendorResponse;

public interface VendorService {

    long addVendor(VendorRequest vendorRequest);

    VendorResponse getVendorById(long id);

    List<VendorResponse> getAllVendors();

    Vendor updateVendorById(long id, VendorRequest vendorRequest);




    
    
    
}
