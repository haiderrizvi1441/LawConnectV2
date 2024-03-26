package com.hr.customerservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hr.customerservice.entity.Appointment;
import java.util.List;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long> {
    Optional <List<Appointment>> findByVendorId(Long vendorId);
    Optional <List<Appointment>> findByCustomerId(Long customerId);
}
