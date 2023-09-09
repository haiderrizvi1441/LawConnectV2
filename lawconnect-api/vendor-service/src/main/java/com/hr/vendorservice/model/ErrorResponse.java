package com.hr.vendorservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// To Return Custom Error in JSON Response, not just in console

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ErrorResponse {
    
    private String errorMessage;
    private String errorCode;
}
