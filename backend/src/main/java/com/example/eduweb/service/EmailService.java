package com.example.eduweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.example.eduweb.model.Registration;



@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendRegistrationEmail(Registration registration) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("admin@example.com");
        message.setSubject("New Student Registration");
        message.setText("Họ và tên: " + registration.getFullName() + 
                        "\nFacebook: " + registration.getFacebookLink() + 
                        "\nTrường: " + registration.getSchool() + 
                        "\nLớp đăng ký: " + registration.getRegisteredClasses());

        mailSender.send(message);
    }
}