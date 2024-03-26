package com.hr.customerservice.service;

import java.util.List;

import com.hr.customerservice.entity.Appointment;
import com.hr.customerservice.model.CreateAppointmentRequest;

public interface AppointmentService {
    
    // CREATE
    Appointment createAppointment(CreateAppointmentRequest createAppointmentRequest);
    
    // READ
    Appointment getAppointmentById(long appointmentId);
    
    // UPDATE
    Appointment updateAppointment(long appointmentId, CreateAppointmentRequest updateAppointmentRequest);
    
    // DELETE
    String deleteAppointment(long appointmentId);

    // Change Status 
    Appointment changeAppointmentStatus(long appointmentId, String newStatus);

    // Get All by CustomerId
    List<Appointment> getAllAppointmentsbyCustomerId(long customerId);

    // Get All by VendorId
    List<Appointment> getAllAppointmentByVendorId(long vendorId);
}
