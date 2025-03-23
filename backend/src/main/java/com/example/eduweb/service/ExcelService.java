package com.example.eduweb.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import com.example.eduweb.model.Registration;




@Service
public class ExcelService {
    public ByteArrayInputStream exportRegistrationsToExcel(List<Registration> registrations) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Registrations");
        Row headerRow = sheet.createRow(0);
        String[] columns = {"ID", "Họ và tên", "Facebook", "Trường", "SĐT học sinh", "SĐT phụ huynh", "Lớp đăng ký", "Ghi chú", "Ngày đăng ký"};
        
        for (int i = 0; i < columns.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(columns[i]);
        }

        int rowIdx = 1;
        for (Registration reg : registrations) {
            Row row = sheet.createRow(rowIdx++);
            row.createCell(0).setCellValue(reg.getId());
            row.createCell(1).setCellValue(reg.getFullName());
            row.createCell(2).setCellValue(reg.getFacebookLink());
            row.createCell(3).setCellValue(reg.getSchool());
            row.createCell(4).setCellValue(reg.getStudentPhone());
            row.createCell(5).setCellValue(reg.getParentPhone());
            row.createCell(6).setCellValue(reg.getRegisteredClasses());
            row.createCell(7).setCellValue(reg.getNote());
            row.createCell(8).setCellValue(reg.getCreatedAt().toString());
        }

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        workbook.write(out);
        workbook.close();
        return new ByteArrayInputStream(out.toByteArray());
    }
}