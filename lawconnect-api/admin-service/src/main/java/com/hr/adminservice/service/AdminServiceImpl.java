package com.hr.adminservice.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hr.adminservice.entity.Admin;
import com.hr.adminservice.entity.UserRole;
import com.hr.adminservice.exception.AdminServiceCustomException;
import com.hr.adminservice.model.AdminRequest;
import com.hr.adminservice.model.AdminResponse;
import com.hr.adminservice.model.LoginRequest;
import com.hr.adminservice.model.LoginResponse;
import com.hr.adminservice.repository.AdminRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class AdminServiceImpl implements AdminService {
    
    // Injecting Repository
    @Autowired
    private AdminRepository adminRepository;

    // Injecting PasswordEncoded
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public long addAdmin(AdminRequest adminRequest) {

        // To Check if user already exists or not 
        log.info("Checking if user already exists");
        Admin tempadmin = adminRepository.findByEmail(adminRequest.getEmail());
        if(tempadmin == null){

        }
        log.info("Adding the user....");
        Admin admin = Admin.builder()
                            .firstname(adminRequest.getFirstname())
                            .lastname(adminRequest.getLastname())
                            .email(adminRequest.getEmail())
                            .password(this.passwordEncoder.encode(adminRequest.getPassword()))
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
    public AdminResponse getAdminbyEmail(String email) {
        log.info("Retrieving the Admin By Email: {}", email);

        Admin admin = adminRepository.findByEmail(email);

        if(admin == null){
            throw new AdminServiceCustomException("Admin with this email not found", "ADMIN_NOT_FOUND");
        }
        // Else convert Entity (Admin) --> Model(AdminResponse)
        AdminResponse adminResponse = AdminResponse.builder()
                                        .id(admin.getId())
                                        .firstname(admin.getFirstname())
                                        .lastname(admin.getLastname())
                                        .email(admin.getEmail())
                                        .password(admin.getPassword())
                                        .role(admin.getRole())
                                        .build();

        log.info("Admin Found");
        return adminResponse;
    }
    // Grouping all User with Role

    @Override
    public List<AdminResponse> getAllUsersByRole(UserRole role) {

        log.info("Retrieving all Users with role:{}", role);
        List<Admin> roleuserstemp = adminRepository.findByRole(role);
        
        // Converting Entity to Model Using Helper Function
        List<AdminResponse> roleusers = roleuserstemp.stream().map(this::toAdminResponse).collect(Collectors.toList());
        
        log.info("All Users Retrieved");
        return roleusers;
    }

    // Main Login functionality
    @Override
    public LoginResponse loginAdmin(LoginRequest loginRequest) {

        Admin admin1 = adminRepository.findByEmail(loginRequest.getEmail());
    
        
        if(admin1 != null && ((admin1.getRole())==UserRole.ADMIN)){
            String password = loginRequest.getPassword();
            String encodedPassword = admin1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            Boolean roleMatch = (admin1.getRole() == UserRole.ADMIN);
    

            if(isPwdRight){
                Optional<Admin> admin = adminRepository.findOneByEmailAndPassword(loginRequest.getEmail(), encodedPassword);

                if(admin.isPresent() && roleMatch){
                    return new LoginResponse("Login Success", true, UserRole.ADMIN);
                }
                else{
                    return new LoginResponse("Login Failed", false, UserRole.ADMIN);
                }
            }
            else{
                return new LoginResponse("Password does not match", false, UserRole.ADMIN);
            }
        }
        else{
            return new LoginResponse("Email does not exist", false, UserRole.ADMIN);
        }
        
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
                                                    .role(admin.getRole())
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
    public String deleteAllByRole(UserRole role) {
        log.info("Deleting all with role:{}", role);
        adminRepository.deleteByRole(role);
        log.info("All Deleted");
        return "All Respective Role Deleted";
    }


    @Override
    public String deleteAll() {
        log.info("Deleting all Users");
        adminRepository.deleteAll();
        log.info("All Users deleted");
        return "All Users are deleted";
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
              