package com.hr.adminservice.controller;

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

import com.hr.adminservice.entity.Admin;
import com.hr.adminservice.model.AdminRequest;
import com.hr.adminservice.model.AdminResponse;
import com.hr.adminservice.service.AdminService;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
    
    // Injecting Service
    @Autowired
    private AdminService adminService;



    @GetMapping("/test")
    public String testing(){
        return "Admin Service API is working fine";
    }

    // To add the Admin 
    @PostMapping("/addAdmin")
    public ResponseEntity<Long> addAdmin(@RequestBody AdminRequest adminRequest){
        long adminId = adminService.addAdmin(adminRequest);
        return new ResponseEntity<>(adminId, HttpStatus.CREATED);

    }

    // To get Admin by Id
    @GetMapping("/{id}")
    public ResponseEntity<AdminResponse> getAdminById(@PathVariable long id){
        AdminResponse adminResponse = adminService.getAdminById(id);
        return new ResponseEntity<>(adminResponse, HttpStatus.OK);
    }

    // To get all the Admins
    @GetMapping("/allAdmins")
    public ResponseEntity<List<AdminResponse>> getAllAdmins(){
        List<AdminResponse> admins = adminService.getAllAdmins();

        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    // To Delete the Admin 
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAdminById(@PathVariable long id){
        String deleted = adminService.deleteAdminById(id);

        return new ResponseEntity<>(deleted,HttpStatus.OK);
    }

    // Updating an user by Id
    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdminById(@PathVariable long id, @RequestBody AdminRequest adminRequest){
        Admin admin = adminService.updateAdminById(id,adminRequest);
        return new ResponseEntity<>(admin, HttpStatus.ACCEPTED);
    }


}
