package com.hr.customerservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr.customerservice.entity.Appointment;
import com.hr.customerservice.model.CreateAppointmentRequest;
import com.hr.customerservice.service.AppointmentService;

@RestController

@RequestMapping("/appointments")
public class AppointmentController {
    
    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/test")
    public String testingappointment(){
        return "Appointment Controller is working fine";
    }


    @PostMapping("/createAppointment")
    public ResponseEntity<Appointment> createAppointment(@RequestBody CreateAppointmentRequest request){
        Appointment appointment = appointmentService.createAppointment(request);
        return new ResponseEntity<>(appointment,HttpStatus.OK);
    }

    @GetMapping("/{appointmentId}")
    public ResponseEntity<Appointment> getAppointment(@PathVariable long appointmentId){
        Appointment appointment = appointmentService.getAppointmentById(appointmentId);
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }

    
    @DeleteMapping("/{appointmentId}")
    public ResponseEntity<String> deleteAppointment(@PathVariable long appointmentId){
        String deleteMessage = appointmentService.deleteAppointment(appointmentId);
        return new ResponseEntity<>(deleteMessage, HttpStatus.OK);
    }

    // CHANGE STATUS
    @PostMapping("/{appointmentId}")
    public ResponseEntity<Appointment> changeAppointmentStatus(@PathVariable long appointmentId, @RequestBody String newStatus){
        Appointment newAppointment = appointmentService.changeAppointmentStatus(appointmentId, newStatus);
        return new ResponseEntity<>(newAppointment, HttpStatus.OK);
    }

    // All Appointments By CustomerId
    @GetMapping("/getallbycustomerid/{customerId}")
    public ResponseEntity<List<Appointment>> getAllAppointmentsByCustomerId(@PathVariable long customerId){
        List<Appointment> allAppByCustomerId = appointmentService.getAllAppointmentsbyCustomerId(customerId);
        return new ResponseEntity<>(allAppByCustomerId, HttpStatus.OK); 

    }

    // All Appointments By VendorId
    @GetMapping("/getallbyvendorid/{vendorId}")
    public ResponseEntity<List<Appointment>> getAllAppointmentsByVendorId(@PathVariable long vendorId){
        List<Appointment> allAppByVendorId = appointmentService.getAllAppointmentByVendorId(vendorId);
        return new ResponseEntity<>(allAppByVendorId, HttpStatus.OK);
    }



}
