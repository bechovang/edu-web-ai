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
        message.setSubject("📌 Thông báo: Đơn đăng ký mới từ " + registration.getFullName());

        String emailContent = String.format(
            "📢 Một đơn đăng ký mới đã được gửi:\n\n" +
            "🔹 Họ và tên: %s\n" +
            "🔹 Facebook: %s\n" +
            "🔹 Trường: %s\n" +
            "🔹 SĐT học viên: %s\n" +
            "🔹 SĐT phụ huynh: %s\n" +
            "🔹 Lớp đăng ký: %s\n" +
            "🔹 Ghi chú: %s\n\n" +
            "⏳ Ngày gửi: %s\n\n" +
            "📩 Vui lòng kiểm tra hệ thống để xử lý đơn đăng ký.",
            registration.getFullName(),
            registration.getFacebookLink(),
            registration.getSchool(),
            registration.getStudentPhone(),
            registration.getParentPhone(),
            registration.getRegisteredClasses(),
            registration.getNote() != null ? registration.getNote() : "Không có",
            registration.getCreatedAt()
        );

        message.setText(emailContent);
        mailSender.send(message);
    }
}
