package com.register.service;

import com.register.model.Registration;

import java.util.List;

public interface RegistrationService {
    Registration registerUser(Registration registration);
    List<Registration> getAllRegistrations();
}
