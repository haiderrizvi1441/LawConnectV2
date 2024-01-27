package com.hr.customerservice.service;

import java.util.List;

import com.hr.customerservice.entity.LoginRequest;
import com.hr.customerservice.entity.LoginResponse;
import com.hr.customerservice.entity.Customer;
import com.hr.customerservice.model.CustomerRequest;
import com.hr.customerservice.model.CustomerResponse;

public interface CustomerService {

    long addCustomer(CustomerRequest customerRequest);

    CustomerResponse getCustomerById(long id);

    List<CustomerResponse> getAllCustomers();

    void deleteCustomerbyId(long id);

    Customer updateCustomerbyId(CustomerRequest customerRequest, long id);

    CustomerResponse getCustomerByEmail(String email);

    LoginResponse loginCustomer(LoginRequest loginRequest);

    

    
    
    
}
