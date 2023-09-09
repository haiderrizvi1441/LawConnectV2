package com.hr.vendorservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr.vendorservice.entity.Vendor;
import com.hr.vendorservice.model.VendorRequest;
import com.hr.vendorservice.service.VendorService;

@RestController
@RequestMapping("/vendor")
public class VendorController {

    @Autowired
    private VendorService vendorService;
    
    @GetMapping("/test")
    public String testing(){
        return "Vendor Controler is working Fine";
    }

    @PostMapping("/addVendor")
    public ResponseEntity<Long> addVendor(@RequestBody VendorRequest vendorRequest){
        
        // When vendor is created in ServiceImpl, it will return an Id
        long vendorId = vendorService.addVendor(vendorRequest);
        return new ResponseEntity<>(vendorId, HttpStatus.CREATED);

    }

    @PostMapping("/addnew")
    public String addNewVendor(@RequestBody Vendor vendor){
        vendorService.addNewVendor(vendor);
        long vendorId = vendor.getId();
        return ("Vendor is successfully added: " + vendorId);
    }
    
}
