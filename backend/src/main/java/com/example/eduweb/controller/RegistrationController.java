package com.example.eduweb.controller;

import com.example.eduweb.model.Registration;
import com.example.eduweb.repository.RegistrationRepository;
import com.example.eduweb.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);

    @Autowired
    private RegistrationRepository repository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> registerStudent(@RequestBody Registration registration) {
        System.out.println("API đã nhận request: " + registration);
        Registration savedRegistration = repository.save(registration);
        emailService.sendRegistrationEmail(savedRegistration);

        logger.info("Đăng ký thành công: {}", savedRegistration);
        return ResponseEntity.ok("Đăng ký thành công!");
    }
}
