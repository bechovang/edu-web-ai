package com.example.eduweb.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import com.example.eduweb.model.Registration;

@Service
public class ExcelService {
    
    /**
     * Xuất danh sách đăng ký sang file Excel
     * @param registrations Danh sách đối tượng Registration cần xuất
     * @return Luồng dữ liệu đầu vào của file Excel
     * @throws IOException Nếu có lỗi khi ghi file
     */
    public ByteArrayInputStream exportRegistrationsToExcel(List<Registration> registrations) throws IOException {
        // 1. Khởi tạo workbook và sheet Excel
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Đơn đăng ký");
        
        // 2. Tạo các kiểu style cho Excel
        CellStyle headerStyle = createHeaderStyle(workbook);       // Style cho header
        CellStyle dataStyle = createDataStyle(workbook);          // Style cho dữ liệu thường
        CellStyle todayDataStyle = createTodayDataStyle(workbook); // Style cho đăng ký hôm nay
        
        // 3. Tạo dòng header
        createHeaderRow(sheet, headerStyle);

        // 4. Định dạng ngày tháng và lấy ngày hiện tại
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
        LocalDateTime today = LocalDateTime.now();
        
        // 5. Điền dữ liệu từng đăng ký vào các dòng
        int rowIdx = 1; // Bắt đầu từ dòng thứ 2 (dòng 1 là header)
        for (Registration reg : registrations) {
            Row row = sheet.createRow(rowIdx++);
            
            // Kiểm tra có phải đăng ký hôm nay không để áp dụng style phù hợp
            boolean isToday = isSameDay(today, reg.getCreatedAt());
            CellStyle style = isToday ? todayDataStyle : dataStyle;
            
            // Điền từng ô dữ liệu
            createCell(row, 0, reg.getId() != null ? reg.getId().toString() : "", style); // ID
            createCell(row, 1, reg.getFullName(), style);                                // Họ tên
            createCell(row, 2, reg.getStudentPhone(), style);                            // SĐT học sinh
            createCell(row, 3, reg.getParentPhone() != null ? reg.getParentPhone() : "", style); // SĐT phụ huynh
            createCell(row, 4, reg.getFacebookLink() != null ? reg.getFacebookLink() : "", style); // Facebook
            createCell(row, 5, reg.getSchool(), style);                                   // Trường học
            createCell(row, 6, getSubjectName(reg.getSubject()), style);                 // Môn học
            createCell(row, 7, reg.getGrade(), style);                                    // Khối lớp
            createCell(row, 8, reg.getNote() != null ? reg.getNote() : "", style);        // Ghi chú
            createCell(row, 9, reg.getCreatedAt().format(dateFormatter), style);         // Ngày đăng ký
        }

        // 6. Ghi workbook ra luồng dữ liệu
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        workbook.write(out);
        workbook.close();
        return new ByteArrayInputStream(out.toByteArray());
    }

    /**
     * Tạo style cho header
     * @param workbook Workbook hiện tại
     * @return CellStyle đã định dạng
     */
    private CellStyle createHeaderStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        Font font = workbook.createFont();
        font.setBold(true);                          // Chữ đậm
        style.setFont(font);
        style.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex()); // Nền xanh nhạt
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        // Đường viền mỏng 4 phía
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        return style;
    }

    /**
     * Tạo style cho dữ liệu thường
     * @param workbook Workbook hiện tại
     * @return CellStyle đã định dạng
     */
    private CellStyle createDataStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        // Chỉ thiết lập đường viền
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        return style;
    }

    /**
     * Tạo style cho đăng ký trong ngày (chữ đỏ)
     * @param workbook Workbook hiện tại
     * @return CellStyle đã định dạng
     */
    private CellStyle createTodayDataStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        // Đường viền mỏng
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        // Chữ màu đỏ
        Font font = workbook.createFont();
        font.setColor(IndexedColors.RED.getIndex());
        style.setFont(font);
        return style;
    }

    /**
     * Tạo dòng header với các tiêu đề cột
     * @param sheet Sheet hiện tại
     * @param headerStyle Style áp dụng cho header
     */
    private void createHeaderRow(Sheet sheet, CellStyle headerStyle) {
        Row headerRow = sheet.createRow(0);
        String[] columns = {
            "ID", "Họ và tên", "SĐT học sinh", "SĐT phụ huynh", 
            "Facebook", "Trường", "Môn học", "Khối lớp", 
            "Ghi chú", "Ngày đăng ký"
        };
        
        for (int i = 0; i < columns.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(columns[i]);    // Đặt giá trị tiêu đề
            cell.setCellStyle(headerStyle);   // Áp dụng style
            sheet.autoSizeColumn(i);          // Tự động điều chỉnh độ rộng cột
        }
    }

    /**
     * Tạo một ô dữ liệu trong sheet
     * @param row Dòng hiện tại
     * @param column Vị trí cột
     * @param value Giá trị hiển thị
     * @param style Style áp dụng
     */
    private void createCell(Row row, int column, String value, CellStyle style) {
        Cell cell = row.createCell(column);
        cell.setCellValue(value);
        cell.setCellStyle(style);
    }

    /**
     * Chuyển mã môn học thành tên hiển thị
     * @param subjectCode Mã môn học
     * @return Tên môn học bằng tiếng Việt
     */
    private String getSubjectName(String subjectCode) {
        return switch (subjectCode) {
            case "chemistry" -> "Hóa học";
            case "math" -> "Toán học";
            case "physics" -> "Vật lý";
            case "biology" -> "Sinh học";
            default -> subjectCode; // Giữ nguyên nếu không khớp
        };
    }

    /**
     * Kiểm tra hai ngày có cùng ngày không (bỏ qua giờ phút)
     * @param date1 Ngày thứ nhất
     * @param date2 Ngày thứ hai
     * @return true nếu cùng ngày
     */
    private boolean isSameDay(LocalDateTime date1, LocalDateTime date2) {
        if (date1 == null || date2 == null) {
            return false;
        }
        return date1.getYear() == date2.getYear() &&      // Cùng năm
               date1.getMonth() == date2.getMonth() &&    // Cùng tháng
               date1.getDayOfMonth() == date2.getDayOfMonth(); // Cùng ngày
    }
}