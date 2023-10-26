package com.hr.adminservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr.adminservice.entity.Admin;
import com.hr.adminservice.entity.UserRole;
import com.hr.adminservice.exception.AdminServiceCustomException;
import com.hr.adminservice.model.AdminRequest;
import com.hr.adminservice.model.AdminResponse;
import com.hr.adminservice.repository.AdminRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class AdminServiceImpl implements AdminService {
    
    // Injecting Repository

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public long addAdmin(AdminRequest adminRequest) {
        log.info("Adding the user....");
        Admin admin = Admin.builder()
                            .firstname(adminRequest.getFirstname())
                            .lastname(adminRequest.getLastname())
                            .email(adminRequest.getEmail())
                            .password(adminRequest.getPassword())
                            .role(UserRole.ADMIN)
                            .build();

        adminRepository.save(admin);
        log.info("Admin Created: {}", admin.getId());
        return admin.getId();
    }

    @Override
    public AdminResponse getAdminById(long id) {
        
        log.info("Retreiving Admin by userId....");

        // Getting the Entity
        Admin admin = adminRepository.findById(id).orElseThrow(() -> new AdminServiceCustomException("No Admin Found with this Id, Check Again", "ADMIN_NOT_FOUND"));

        // Converting Entity to Model: AdminResponse using BeanUtils
        AdminResponse adminResponse = new AdminResponse();
        BeanUtils.copyProperties(admin, adminResponse);
        
        log.info("User retrieved.");

        return adminResponse;

    }

    @Override
    public List<AdminResponse> getAllAdmins() {
        log.info("Retrieving all the Admins");
        List<Admin> admins = adminRepository.findAll();
        // Entity -> Model
        List<AdminResponse> adminsResponses = admins.stream().map(this::toAdminResponse).collect(Collectors.toList());
        log.info("All Admins retrieved");
        return adminsResponses;
   
    }

    // Helper function to convert Entity to Model
    private AdminResponse toAdminResponse(Admin admin){
        AdminResponse adminResponse = AdminResponse.builder()
                                                    .id(admin.getId())
                                                    .firstname(admin.getFirstname())
                                                    .lastname(admin.getLastname())
                                                    .email(admin.getEmail())
                                                    .password(admin.getPassword())
                                                    .build();
 
        return adminResponse;
    }

    @Override
    public String deleteAdminById(long id) {
        log.info("Deleting Admin id:{}",id);
        adminRepository.deleteById(id);
        return "Admin Deleted Successfully";
    }

    @Override
    public Admin updateAdminById(long id, AdminRequest adminRequest) {
        
        log.info("Retreiving the admin id:{}", id);

        // Transferring Info of Model to Admin

        // 1. Retrieve the Entity which needs to be updated.    
        Admin admin = adminRepository.findById(id).get();
        // 2. Updating the Values
        admin.setFirstname(adminRequest.getFirstname());
        admin.setLastname(adminRequest.getLastname());
        admin.setEmail(adminRequest.getEmail());
        admin.setPassword(adminRequest.getPassword());
        // 3. Save the updated entity
        adminRepository.save(admin);

        return admin;
    }


    
}
              