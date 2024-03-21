package com.hr.customerservice.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Table(name="appointments_master")
public class Appointment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long appointmentId;

    @Column(nullable = false, name="customer_id")
    private Long customerId;

    @Column(nullable = false, name="vendor_id")
    private Long vendorId;

    @Column(name="date_time")
    private LocalDateTime dateTime;

    @Column(name = "description")
    private String description;

    @Column(name="status")
    private String status;

}
