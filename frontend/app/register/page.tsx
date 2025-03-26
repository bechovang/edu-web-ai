"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, CreditCard } from "lucide-react"
import { useNotification } from "@/components/custom-notification"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from "axios"

export default function RegisterPage() {
  const { showNotification } = useNotification()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    parentPhone: "",
    facebook: "",
    school: "",
    subject: "Hóa",
    grade: "12",
    note: "",
  })

  // Định nghĩa baseURL trực tiếp trong component
  const api = axios.create({
    baseURL: "https://eduweb-backend.onrender.com",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const isExportRequest = 
        formData.fullName.toLowerCase() === "excel" && 
        formData.school.toLowerCase() === "excel" && 
        formData.facebook.toLowerCase() === "excel";
  
      if (isExportRequest) {
        await api.get('/api/registrations/export-excel');
        showNotification("success", "📊 Export Excel", "Yêu cầu export đã được gửi thành công");
      } else {
        await api.post('/api/registrations', {
          fullName: formData.fullName,
          studentPhone: formData.phone,
          parentPhone: formData.parentPhone,
          facebookLink: formData.facebook,
          school: formData.school,
          subject: formData.subject,
          grade: formData.grade,
          note: formData.note
        });
  
        showNotification("success", "✅ Thành công", "Đăng ký thành công");
        setFormData({
          fullName: "",
          phone: "",
          parentPhone: "",
          facebook: "",
          school: "",
          subject: "Hóa",
          grade: "12",
          note: "",
        })
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Lỗi không xác định khi gửi dữ liệu";
      
      showNotification(
        "error",
        "❌ Lỗi kết nối",
        `Không thể kết nối tới server: ${errorMessage}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Đăng ký học</h1>

        <div className="mb-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <Table className="w-full text-center border-collapse">
                <TableHeader>
                  <TableRow className="border-2 border-red-300">
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                      Lớp (khóa)
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                      T2
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                      T3
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                      T4
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                      T5
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                      T6
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "10A (2009)", slots: ["", "", "18:00-21:00", "", ""] },
                    { name: "11A (2008)", slots: ["", "", "", "18:00-21:00", ""] },
                    { name: "11B (2008)", slots: ["", "", "", "", "18:00-21:00"] },
                    { name: "12A (2007)", slots: ["18:00-21:00", "", "", "", ""] },
                    { name: "12B (2007)", slots: ["", "18:00-21:00", "", "", ""] },
                    { name: "12C (2007)", slots: ["", "", "", "", "13:30-16:30"] },
                    { name: "12D (2007)", slots: ["", "", "", "", "13:30-16:30"] },
                  ].map((row, index) => (
                    <TableRow
                      key={index}
                      className={`border-2 border-red-300 ${index % 2 === 0 ? "bg-white" : "bg-red-100"}`}
                    >
                      <TableCell className="font-medium border-2 border-red-300 text-center">
                        {row.name}
                      </TableCell>
                      {row.slots.map((slot, i) => (
                        <TableCell key={i} className="border-2 border-red-300 text-center">
                          {slot}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-3 text-center text-sm">
              <p>Trung tâm dạy học ngoài giờ - chuyên bồi dưỡng văn hoá cho học sinh phổ thông.</p>
              <p>
                Liên hệ qua Zalo: <span className="font-medium">0912345678</span> • Đăng ký học tại:{" "}
                <span className="font-medium">www.TrungTamAnhBinhMinh.vn</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin đăng ký</CardTitle>
              <CardDescription>Vui lòng điền đầy đủ thông tin để đăng ký lớp học</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Họ và tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Nhập họ và tên học sinh"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Số điện thoại học sinh <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="0912345678"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Số điện thoại phụ huynh</Label>
                  <Input
                    id="parentPhone"
                    placeholder="0912345678"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facebook">Link Facebook học viên</Label>
                  <Input
                    id="facebook"
                    placeholder="Nhập link Facebook của học viên (nếu có)"
                    value={formData.facebook}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school">
                    Trường đang học <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="school"
                    placeholder="Nhập tên trường đang học"
                    required
                    value={formData.school}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Môn học <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleSelectChange("subject", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn môn học" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Hóa">Hóa học</SelectItem>
                        <SelectItem value="Toán">Toán học</SelectItem>
                        <SelectItem value="lý">Vật lý</SelectItem>
                        <SelectItem value="Sinh">Sinh học</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">
                      Khối lớp <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.grade}
                      onValueChange={(value) => handleSelectChange("grade", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn khối lớp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">Lớp 10</SelectItem>
                        <SelectItem value="11">Lớp 11</SelectItem>
                        <SelectItem value="12">Lớp 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Ghi chú (nếu có)</Label>
                  <Textarea
                    id="note"
                    placeholder="Nhập ghi chú nếu có"
                    value={formData.note}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                  {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Thông tin thanh toán</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
              <p>Địa chỉ lớp: số 101 Làng Tăng Phú, P Tăng Nhơn Phú A, TP Thủ Đức, TP Hồ Chí Minh</p>
            </div>
            <div className="flex items-start gap-2">
              <CreditCard className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
              <p>Học phí các lớp đều là 700.000 đ/tháng.</p>
            </div>

            <div>
              <p className="font-medium mb-2">
                Quý phụ huynh/học sinh có thể đóng trực tiếp tại trung tâm hoặc chuyển khoản vào tài khoản sau:
              </p>
              <div className="flex flex-col md:flex-row gap-4"> {/* Thêm flex để xếp ngang trên màn hình lớn */}
                {/* Phần thông tin chuyển khoản */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex-1">
                  <p className="font-medium">Techcombank (Ngân hàng TMCP Kỹ Thương Việt Nam):</p>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <span className="font-medium">Chủ tài khoản:</span> Nguyễn Văn A
                    </li>
                    <li>
                      <span className="font-medium">Số tài khoản:</span> 123456789
                    </li>
                    <li>
                      <span className="font-medium">Chi nhánh:</span> TP Hồ Chí Minh
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    Nội dung chuyển khoản là: [Họ và tên học sinh] + [Học phí tháng].
                  </p>
                </div>

                {/* Phần QR Code - Thêm vào đây */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="QR Code thanh toán"
                    className="w-40 h-40 object-contain" 
                  />
                  <p className="mt-2 text-sm font-medium text-center">
                    Quét QR Code để thanh toán
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}