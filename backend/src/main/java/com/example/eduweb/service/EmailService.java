package com.example.eduweb.service;

import java.io.ByteArrayInputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import com.example.eduweb.model.Registration;
import java.util.List;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private ExcelService excelService;

    public void sendRegistrationEmail(Registration registration) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("phuchcm2006@gmail.com");
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



    public void sendExcelEmail(List<Registration> registrations) throws MessagingException, IOException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
    
        helper.setTo("phuchcm2006@gmail.com");
        helper.setSubject("📌 File Excel Tổng hợp đơn đăng ký học");
    
        String emailContent = "📢 Danh sách đơn đăng ký học được đính kèm trong file Excel.\n\n" +
                "Vui lòng kiểm tra File để xử lý đơn đăng ký.";
    
        helper.setText(emailContent, true);
    
        // Tạo file Excel
        ByteArrayInputStream excelStream = excelService.exportRegistrationsToExcel(registrations);
        InputStreamSource attachment = new ByteArrayResource(excelStream.readAllBytes());
    
        helper.addAttachment("DanhSachDonDangKyHoc.xlsx", attachment);
    
        mailSender.send(message);
    }
    
}
