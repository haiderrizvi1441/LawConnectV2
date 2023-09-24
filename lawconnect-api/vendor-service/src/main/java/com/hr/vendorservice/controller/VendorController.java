package com.hr.vendorservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr.vendorservice.entity.Vendor;
import com.hr.vendorservice.model.VendorRequest;
import com.hr.vendorservice.model.VendorResponse;
import com.hr.vendorservice.service.VendorService;

@RestController
@CrossOrigin
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


    @GetMapping("/{id}")
    public ResponseEntity<VendorResponse> getVendorById(@PathVariable long id){
        VendorResponse vendorResponse = vendorService.getVendorById(id);
        return new ResponseEntity<>(vendorResponse, HttpStatus.OK);
    }

    @GetMapping("/allVendors")
    public ResponseEntity<List<VendorResponse>> getAllVendors(){
        List<VendorResponse> vendors = vendorService.getAllVendors();

        return new ResponseEntity<>(vendors, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vendor> updateVendorById(@PathVariable long id , @RequestBody VendorRequest vendorRequest){
        Vendor updatedVendor = vendorService.updateVendorById(id,vendorRequest);

        return new ResponseEntity<>(updatedVendor,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVendorById(@PathVariable long id){
        
        vendorService.deleteVendorById(id);

        return new ResponseEntity<>("Vendor Deleted Successfully",HttpStatus.ACCEPTED);
    }
    

    
}
