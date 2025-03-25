package com.register.exception;

public class PhoneAlreadyExistException extends RuntimeException {
    public PhoneAlreadyExistException(String message) {
        super(message);
    }
}
