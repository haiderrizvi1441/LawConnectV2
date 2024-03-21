package com.hr.customerservice.service;

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
}
