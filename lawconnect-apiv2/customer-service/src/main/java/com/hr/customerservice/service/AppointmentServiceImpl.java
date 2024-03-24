package com.hr.customerservice.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr.customerservice.entity.Appointment;
import com.hr.customerservice.exception.AppointmentCustomException;
import com.hr.customerservice.feign.VendorFeign;
import com.hr.customerservice.model.CreateAppointmentRequest;
import com.hr.customerservice.repository.AppointmentRepository;
import com.hr.vendorservice.entity.Vendor;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private VendorFeign vendorFeign;
    @Override
    public Appointment createAppointment(CreateAppointmentRequest createAppointmentRequest) {
        log.info("Creating New Appointment");
        Appointment appointment = new Appointment();
        appointment.setCustomerId(createAppointmentRequest.getCustomerId());  
        appointment.setDateTime(createAppointmentRequest.getDateTime());
        appointment.setDescription(createAppointmentRequest.getDescription());
        appointment.setStatus("PENDING");

        log.info("Checking Vendor Availablity");
        // VALIDATE VENDOR before setting vendorId
        Vendor vendor = vendorFeign.getVendorById(createAppointmentRequest.getVendorId());
        if(vendor == null){
            throw new AppointmentCustomException("Vendor not found with Id: " +createAppointmentRequest.getVendorId() );
        }
        appointment.setVendorId(createAppointmentRequest.getVendorId());
        log.info("Appointment created successfully");
        // Save to Repo 
        return appointmentRepository.save(appointment);
    }

    @Override
    public Appointment getAppointmentById(long appointmentId) {
        log.info("Finding the Appointment");
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new AppointmentCustomException("No Appointment exist with id: "+ appointmentId));
        log.info("Appointment Found");
        return appointment;

    }

    @Override
    public Appointment updateAppointment(long appointmentId, CreateAppointmentRequest updateAppointmentRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateAppointment'");
    }

    @Override
    public String deleteAppointment(long appointmentId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAppointment'");
    }
    
}
