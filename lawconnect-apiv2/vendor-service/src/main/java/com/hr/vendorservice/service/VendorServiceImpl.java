package com.hr.vendorservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hr.vendorservice.entity.UserRole;
import com.hr.vendorservice.entity.Vendor;
import com.hr.vendorservice.exception.VendorServiceCustomException;
import com.hr.vendorservice.model.LoginRequest;
import com.hr.vendorservice.model.LoginResponse;
import com.hr.vendorservice.model.VendorRequest;
import com.hr.vendorservice.model.VendorResponse;
import com.hr.vendorservice.repository.VendorRepository;

import jakarta.ws.rs.BadRequestException;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class VendorServiceImpl implements VendorService {
    // Injecting Repo
    @Autowired
    private VendorRepository vendorRepository;
    // Injecting PasswordEncoder
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public long addVendor(VendorRequest vendorRequest) {
        log.info("Adding Vendor......");
        // Converting From Model to Entity(VendorRequest -> Vendor)
        Vendor vendor = Vendor.builder()
                        .firstname(vendorRequest.getFirstname())
                        .lastname(vendorRequest.getLastname())
                        .email(vendorRequest.getEmail())
                        .password(this.passwordEncoder.encode(vendorRequest.getPassword()))
                        .role(UserRole.VENDOR)
                        .skills(new ArrayList<>())
                        
                        .build();

        // Saving the vendor in DataBase through JPARepo
        vendorRepository.save(vendor);

        log.info("Vendor Created");

        // Return the Vendor Id as per the controller requirement
        return vendor.getId();
    }
    

    // Getting Vendor By id
    @Override
    public VendorResponse getVendorById(long id) {
        log.info("Searching For the Vendor Id: {}",id);
        // Getting Vendor 
        Vendor vendor = vendorRepository.findById(id).orElseThrow(() -> new VendorServiceCustomException("Vendor with Given Id Does not exist , please check again.", "VENDOR_NOT_FOUND"));

        // Vendor -> VendorResponse
        VendorResponse vendorResponse = new VendorResponse();

        // Copying Properties using BeanUtils
        BeanUtils.copyProperties(vendor, vendorResponse);

        return vendorResponse;
    }

    // Getting Vendor By Email
    @Override
    public VendorResponse getVendorByEmail(String email) {
        log.info("Retrieving the Vendor with email:{}", email);
        Vendor vendor = vendorRepository.findByEmail(email);
        if(vendor == null){
            throw new VendorServiceCustomException("Vendor with this email is not found", "VENDOR_NOT_FOUND");
        }

        // vendor --> vendorResponse (Entity -> Model)
        VendorResponse vendorResponse = VendorResponse.builder()
                                        .id(vendor.getId())
                                        .firstname(vendor.getFirstname())
                                        .lastname(vendor.getLastname())
                                        .email(vendor.getEmail())
                                        .password(vendor.getPassword())
                                        .role(vendor.getRole())
                                        .skills(vendor.getSkills())
                                        .build();
        log.info("Vendor is Found ");
        
        return vendorResponse;
    }

    @Override
    public LoginResponse loginVendor(LoginRequest loginRequest) {
        
        Vendor vendor1 = vendorRepository.findByEmail(loginRequest.getEmail());

        if(vendor1 != null){
            String password = loginRequest.getPassword();
            String encodedPassword = vendor1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            Boolean roleMatch = (vendor1.getRole() == UserRole.VENDOR);
            Long id = vendor1.getId();

            if(isPwdRight){
                Optional<Vendor> vendor = vendorRepository.findOneByEmailAndPassword(loginRequest.getEmail(), encodedPassword);

                if(vendor.isPresent() && roleMatch){
                    return new LoginResponse("Login Success", true, UserRole.VENDOR,id);
                }
                else{
                    return new LoginResponse("Login Failed", false, UserRole.VENDOR,id);
                }
            }
            else{
                return new LoginResponse("Password does not match", false, UserRole.VENDOR,id);
            }

        }
        else{
            return new LoginResponse("Email does not exist", false, UserRole.VENDOR,null);
        }
        
    }


    // Getting all vendors 
    @Override
    public List<VendorResponse> getAllVendors() {
        List<Vendor> vendors = vendorRepository.findAll();
        log.info("Getting all Vendors");
        // Converting from Vendor to VendorResponse
        List<VendorResponse> vendorResponses = vendors.stream()
                                                        .map(this::toVendorResponse)
                                                        .collect(Collectors.toList());
        log.info("All Vendors Retreived");                                             
        return vendorResponses;
    }

    // Helper Function to convert Vendor -> VendorResponse
    private VendorResponse toVendorResponse(Vendor vendor){
        VendorResponse vendorResponse = VendorResponse.builder()
                                        .id(vendor.getId())
                                        .firstname(vendor.getFirstname())
                                        .lastname(vendor.getLastname())
                                        .email(vendor.getEmail())
                                        .password(vendor.getPassword())
                                        .skills(vendor.getSkills())
                                        .build();

        return vendorResponse;
    }

    // Updating vendor by Id
    @Override
    public Vendor updateVendorById(long id, VendorRequest vendorRequest) {
        log.info("Retrieving the Vendor by Id: {}", id);
        Vendor vendor = vendorRepository.findById(id).get();
        // Setting the stored entity properites using the vendorRequest Model Client has given
        vendor.setFirstname(vendorRequest.getFirstname());
        vendor.setLastname(vendorRequest.getLastname());
        vendor.setEmail(vendorRequest.getEmail());
        vendor.setPassword(vendorRequest.getPassword());


        // Saving the update Entity back to Repo
        vendorRepository.save(vendor);

        return vendor;
    }


    @Override
    public String deleteVendorById(long id) {
        log.info("Retrieving the Vendor ID: {}",id);
        vendorRepository.deleteById(id);
        log.info("Vendor Deleted Successfully");
        
        return "Vendor Deleted Successfully";
        
    }

    // To get Vendor By Id and add the skill to his profile 
    @Override
    public Vendor addSkillToVendor(long vendorId, String skill) {
        // Get the Vendor by ID
        if(vendorRepository.existsById(vendorId)){
            log.info("Retreiving the Vendor by Id");
        }
        else{
            log.info("Error: Vendor does not exist, check id");
        }
        Vendor vendor = vendorRepository.findById(vendorId).get();
        if(vendor.getSkills().contains(skill)){
            throw new BadRequestException("Skill already added to Vendor Profile");
        }
        // Else add the skill
        vendor.getSkills().add(skill);

        return vendorRepository.save(vendor);
    }


    

 

}
