package com.hr.customerservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hr.customerservice.entity.Customer;;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

    Optional<Customer> findOneByEmailAndPassword(String email, String password);
    Customer findByEmail(String email);
    
}
