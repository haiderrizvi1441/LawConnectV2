package com.hr.vendorservice.exception;

public class VendorServiceCustomException extends RuntimeException {
    
    private String errorCode;

    public VendorServiceCustomException(String message, String errorCode){
        super(message);
        this.errorCode = errorCode;
    }

}
