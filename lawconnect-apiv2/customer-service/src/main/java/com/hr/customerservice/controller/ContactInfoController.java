package com.hr.customerservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr.customerservice.entity.ContactInfo;
import com.hr.customerservice.model.ContactInfoRequest;
import com.hr.customerservice.service.ContactInfoService;

@RestController

@RequestMapping("/contactinfo")
public class ContactInfoController {
    
    @Autowired
    private ContactInfoService contactInfoService;
    @GetMapping("/test")
    public String testing(){
        return "Contact Info Controller is working fine";
    }

    @PostMapping("/")
    public ResponseEntity<ContactInfo> addContactInfo(@RequestBody ContactInfoRequest contactInfoRequest){
        ContactInfo contactInfo = contactInfoService.addContactInfo(contactInfoRequest);
        return new ResponseEntity<>(contactInfo, HttpStatus.OK);
    }

    
    @GetMapping("/getcontactinfo/{id}")
    public ResponseEntity<ContactInfo> getContactInfoById(@PathVariable long id){
        ContactInfo contactInfo = contactInfoService.getContactInfoById(id);
        return new ResponseEntity<>(contactInfo, HttpStatus.OK);
    }

    @GetMapping("/getallcontactinfo")
    public ResponseEntity<List<ContactInfo>> getAllContactInfo(){
        List<ContactInfo> allContactInfo = contactInfoService.getAllContactInfo();
        return new ResponseEntity<>(allContactInfo,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContactInfoById(@PathVariable long id){
        String message = contactInfoService.deleteContactInfoById(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }


}
