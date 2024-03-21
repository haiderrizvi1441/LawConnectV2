package com.hr.customerservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
}
