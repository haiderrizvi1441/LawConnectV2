package com.hr.customerservice.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hr.customerservice.entity.Customer;
import com.hr.customerservice.entity.LoginRequest;
import com.hr.customerservice.entity.LoginResponse;

import com.hr.customerservice.entity.UserRole;
import com.hr.customerservice.exception.CustomerServiceCustomException;
import com.hr.customerservice.model.CustomerRequest;
import com.hr.customerservice.model.CustomerResponse;
import com.hr.customerservice.repository.CustomerRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class CustomerServiceImpl implements CustomerService{

    @Autowired // Dependency Injection
    private CustomerRepository customerRepository;

    
    @Autowired // Injecting password Encoder
    private PasswordEncoder passwordEncoder;

    @Override
    public long addCustomer(CustomerRequest customerRequest) {
        log.info("Adding Customer");
        // we get the Model in params , but it wil be stored as Entity 
        Customer customer = Customer.builder()
                        .firstname(customerRequest.getFirstname())
                        .lastname(customerRequest.getLastname())
                        .email(customerRequest.getEmail())
                        .password(this.passwordEncoder.encode(customerRequest.getPassword()))
                        .role(UserRole.USER)
                        .build();
        
        // Adding the Created Entity to Repo
        customerRepository.save(customer);
        log.info("Customer added with id:{}",customer.getId());
        return customer.getId();
    }

    @Override
    public CustomerResponse getCustomerById(long id) {
        log.info("Retreiving Customer with Id:{}",id);

        // Getting the Entity
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new CustomerServiceCustomException("No Customer exists with this Id", "CUSTOMER_NOT_FOUND"));

        // customer -> customerResponse (Entity -> Model)
        CustomerResponse customerResponse = new CustomerResponse();
        BeanUtils.copyProperties(customer, customerResponse);

        log.info("Customer Found");
        return customerResponse;

    }

    // To get the customer by Email for Front End Login and Loading HomePage as per the role
    @Override
    public CustomerResponse getCustomerByEmail(String email) {

        log.info("Retrieving the customer with email:{}", email);
        Customer customer = customerRepository.findByEmail(email);
        if (customer==null){
            throw new CustomerServiceCustomException("Customer with this email is not found", "CUSTOMER_NOT_FOUND");
        }
        
        // customer -> customerResponse (Entity -> Model)
        CustomerResponse customerResponse = CustomerResponse.builder()
                                                .id(customer.getId())
                                                .firstname(customer.getFirstname())
                                                .lastname(customer.getLastname())
                                                .email(customer.getEmail())
                                                .password(customer.getPassword())
                                                .role(customer.getRole())
                                                .build();
        

        log.info("Customer Found");
        return customerResponse;

        
    }
    // FOR LOGIN in Front End
    @Override
    public LoginResponse loginCustomer(LoginRequest loginRequest) {
        
        Customer customer1 = customerRepository.findByEmail(loginRequest.getEmail());
        if(customer1 != null){
            String password = loginRequest.getPassword();
            String encodedPassword = customer1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            Boolean roleMatch = (customer1.getRole() == UserRole.USER);

            if(isPwdRight){ // is password right, check if
                Optional<Customer> customer = customerRepository.findOneByEmailAndPassword(loginRequest.getEmail(), encodedPassword);

                if(customer.isPresent() && roleMatch){
                    return new LoginResponse("Login Success",true, UserRole.USER,customer.get().getId());
                }
                else{
                    return new LoginResponse("Login Failed", false, UserRole.USER , customer.get().getId());
                }
            }
            else{
                return new LoginResponse("Password does not match", false, UserRole.USER , 04747474);
            }
        }
        else{
            return new LoginResponse("Email does not exist", false, UserRole.USER,04747474);
        }
    }


    @Override
    public List<CustomerResponse> getAllCustomers() {
        log.info("Retrieving all the customers");
        List<Customer> customers = customerRepository.findAll();
        // Converting List<Entity> to List<Model>
        List<CustomerResponse> customersResponses = customers.stream()
                                            .map(this::toCustomerResponse)
                                            .collect(Collectors.toList());
        
        log.info("All customers are retrieved sucessfully");
        return customersResponses;
    } 

    // Helper Function to Convert User -> UserResponse (Entity->Model)
    public CustomerResponse toCustomerResponse(Customer customer){
        CustomerResponse customerResponse = CustomerResponse.builder()
                                                .id(customer.getId())
                                                .firstname(customer.getFirstname())
                                                .lastname(customer.getLastname())
                                                .email(customer.getEmail())
                                                .password(customer.getPassword())
                                                .role(customer.getRole())
                                                .build();
        return customerResponse;
    }

    @Override
    public void deleteCustomerbyId(long id) {
        log.info("Deleting customer: {}",id);
        customerRepository.deleteById(id);

        log.info("Customer Deleted Successfully");
    }

    @Override
    public Customer updateCustomerbyId(CustomerRequest customerRequest, long id) {
        log.info("Retrieving Customer:{}",id);
        Customer customer = customerRepository.findById(id).get();

        // Modifying the properties of Entity from customer Request
        customer.setFirstname(customerRequest.getFirstname());
        customer.setLastname(customerRequest.getLastname());
        customer.setEmail(customerRequest.getEmail());
        customer.setPassword(customerRequest.getPassword());

        
        log.info("Customer Found, updating Customer");
        // Updating the entity in Repo
        customerRepository.save(customer);
        log.info("Customer Updated Successfully");
        return customer;
    }

    
    




}
