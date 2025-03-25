package com.register.service.impl;


import com.register.exception.EmailAlreadyExistException;
import com.register.exception.PhoneAlreadyExistException;
import com.register.model.Registration;
import com.register.repository.RegistrationRepository;
import com.register.service.RegistrationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    private final RegistrationRepository registrationRepository;

    public RegistrationServiceImpl(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @Override
    public Registration registerUser(Registration registration) {
        if(registrationRepository.existsByEmail(registration.getEmail())){
            throw new EmailAlreadyExistException("Email already exists");
        }
        if(registrationRepository.existsByPhone(registration.getPhone())){
            throw new PhoneAlreadyExistException("Phone already exists");
        }
        return registrationRepository.save(registration);
    }


    @Override
    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }
}
