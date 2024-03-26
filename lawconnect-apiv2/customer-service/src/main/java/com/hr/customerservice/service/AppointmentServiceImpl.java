package com.hr.customerservice.service;

import java.util.List;

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
    public Appointment updateAppointment(long appointmentId, CreateAppointmentRequest updatedAppointmentRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateAppointment'");
    }

    @Override
    public String deleteAppointment(long appointmentId) {
        log.info("Deleting Appointment");
        appointmentRepository.deleteById(appointmentId);
        log.info("Appointment Deleted Successfully");
        return "Appointment deleted successfully with id: " + appointmentId;

    }

    @Override
    public Appointment changeAppointmentStatus(long appointmentId, String newStatus) {
        Appointment tempAppointment = appointmentRepository.findById(appointmentId).get();
        
        if(tempAppointment == null){
            throw new AppointmentCustomException("Appointment not found with Id: " + appointmentId);
        }

        tempAppointment.setStatus(newStatus);

        // adding back to repo
        appointmentRepository.save(tempAppointment);
        return tempAppointment;

        

    }

    @Override
    public List<Appointment> getAllAppointmentsbyCustomerId(long customerId) {
        log.info("Getting all appointments by the customerId: " ,customerId);
        List<Appointment> customerAppointments = appointmentRepository.findByCustomerId(customerId).get();
        if(customerAppointments==null){
            throw new AppointmentCustomException("No Appointments found with the given customerId");
        }
        log.info("All customer Appointments Retrieved");
        return customerAppointments;        
    }

    @Override
    public List<Appointment> getAllAppointmentByVendorId(long vendorId) {
        log.info("Getting all appointments by the vendorId: ", vendorId);
        List<Appointment> vendorAppointments = appointmentRepository.findByVendorId(vendorId).get();
        if(vendorAppointments == null){
            throw new AppointmentCustomException("No Appointments found with the given vendorId");
        }
        log.info("All vendor appointments Retreived");
        return vendorAppointments;
    }
    
}
