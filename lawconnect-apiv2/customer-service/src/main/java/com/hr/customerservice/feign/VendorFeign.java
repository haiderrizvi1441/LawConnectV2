package com.hr.customerservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.hr.vendorservice.entity.Vendor;

@FeignClient("VENDOR-SERVICE")
public interface VendorFeign {

    @GetMapping("/vendor/id/{id}")
    Vendor getVendorById(@PathVariable("id") Long vendorId);
    
}
