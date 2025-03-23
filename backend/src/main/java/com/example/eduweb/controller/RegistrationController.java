package com.example.eduweb.controller;

import com.example.eduweb.model.Registration;
import com.example.eduweb.repository.RegistrationRepository;
import com.example.eduweb.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationRepository repository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> registerStudent(@RequestBody Registration registration) {
        Registration savedRegistration = repository.save(registration);
        emailService.sendRegistrationEmail(savedRegistration);
        return ResponseEntity.ok("Đăng ký thành công!");
    }
}
