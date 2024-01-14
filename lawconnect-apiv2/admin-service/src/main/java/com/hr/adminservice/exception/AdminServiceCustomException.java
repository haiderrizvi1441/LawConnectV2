package com.hr.adminservice.exception;

public class AdminServiceCustomException extends RuntimeException{
    
    private String errorCode;

    public AdminServiceCustomException(String message, String errorCode){

        super(message);
        this.errorCode = errorCode;
    }

}
