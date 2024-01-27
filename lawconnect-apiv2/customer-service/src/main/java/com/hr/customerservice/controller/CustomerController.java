package com.hr.customerservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr.customerservice.entity.Customer;
import com.hr.customerservice.entity.LoginRequest;
import com.hr.customerservice.entity.LoginResponse;
import com.hr.customerservice.model.CustomerRequest;
import com.hr.customerservice.model.CustomerResponse;
import com.hr.customerservice.service.CustomerService;



@RestController


@RequestMapping("/customer")
public class CustomerController {
    
    // Injecting the Service
    @Autowired
    private CustomerService customerService;

    @GetMapping("/test")
    public String testing(){
        return "CUSTOMER SERVICE API is working fine";
    }

    // Adding an User
    @PostMapping("/addCustomer")
    public ResponseEntity<Long> addCustomer(@RequestBody CustomerRequest customerRequest){

        long customerId = customerService.addCustomer(customerRequest);
        return new ResponseEntity<>(customerId, HttpStatus.CREATED);

    }

    // Getting the users by id 
    @GetMapping("/id/{id}")
    public ResponseEntity<CustomerResponse> getCustomerById(@PathVariable long id){
        CustomerResponse customerResponse = customerService.getCustomerById(id);
        return new ResponseEntity<>(customerResponse, HttpStatus.OK);
    }

    // Getting the user by email for Logging in 
    @GetMapping("/email/{email}")
    // /email/{email} Request param fix for ambigiuos handler method on stack overflow
    public ResponseEntity<CustomerResponse> getcustomerByEmail(@PathVariable String email){
        CustomerResponse customerResponse = customerService.getCustomerByEmail(email);
        return new ResponseEntity<>(customerResponse, HttpStatus.OK);

    }

    // Main Login Functionality
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginCustomer(@RequestBody LoginRequest loginRequest){
        LoginResponse loginResponse = customerService.loginCustomer(loginRequest);
        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }

    // Get All the users
    @GetMapping("/allCustomers")
    public ResponseEntity<List<CustomerResponse>> getAllCustomers(){
        List<CustomerResponse> customersResponses = customerService.getAllCustomers();
        return new ResponseEntity<>(customersResponses, HttpStatus.OK);
    }

    // Deleting the user by Id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomerbyId(@PathVariable long id){
        customerService.deleteCustomerbyId(id);
        return new ResponseEntity<>("Customer Deleted Sucessfully", HttpStatus.OK);
    }


    //Updating the user by id
    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomerById(@RequestBody CustomerRequest customerRequest, @PathVariable long id){
        Customer updatedCustomer = customerService.updateCustomerbyId(customerRequest, id);
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }


}
