package com.hr.customerservice.exception;

public class CustomerServiceCustomException extends RuntimeException {

    private String errorCode;

    public CustomerServiceCustomException(String message, String errorCode){
        super(message);
        this.errorCode = errorCode;
    }

}
