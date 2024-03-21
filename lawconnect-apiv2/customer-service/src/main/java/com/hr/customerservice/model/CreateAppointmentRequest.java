package com.hr.customerservice.model;

import lombok.Data;

@Data
public class CreateAppointmentRequest {
    
    private long customerId;
    private long vendorId;
    private String description;


}
