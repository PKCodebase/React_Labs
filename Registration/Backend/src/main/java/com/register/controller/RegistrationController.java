package com.register.controller;

import com.register.model.Registration;
import com.register.service.impl.RegistrationServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class RegistrationController {

    private final RegistrationServiceImpl registrationServiceImpl;

    public RegistrationController(RegistrationServiceImpl registrationServiceImpl) {
        this.registrationServiceImpl = registrationServiceImpl;
    }


    @PostMapping
    public ResponseEntity<String> registerUser(@Valid @RequestBody Registration registration) {
        registrationServiceImpl.registerUser(registration);
        return ResponseEntity.ok("Registration Successful!");
    }

    @GetMapping
    public List<Registration> getAllRegistrations() {
        return registrationServiceImpl.getAllRegistrations();
    }
}
