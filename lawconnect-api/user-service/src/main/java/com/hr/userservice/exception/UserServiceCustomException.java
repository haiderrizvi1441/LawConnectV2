package com.hr.userservice.exception;

public class UserServiceCustomException extends RuntimeException {

    private String errorCode;

    public UserServiceCustomException(String message, String errorCode){
        super(message);
        this.errorCode = errorCode;
    }

}
