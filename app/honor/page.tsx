import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CountdownTimer from "@/components/countdown-timer"
import HighScoreStudents from "@/components/high-score-students"
import RecentPosts from "@/components/recent-posts"
import ClassGallery from "@/components/class-gallery"
import TeacherGallery from "@/components/teacher-gallery"
import Link from "next/link"
import Image from "next/image"


export default function HomePage() {
  return (
    <main className="min-h-screen">
    {/* Hero Section with Background */}
    <section className="relative py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-background.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-white">
            <div className="flex items-center mb-6">
              <Image src="/images/logo.jpg" alt="Logo Ánh Bình Minh" width={80} height={80} className="mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Website Trung Tâm Ánh Bình Minh</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mt-2">ABMedu</h2>
              </div>
            </div>
            <p className="text-lg mb-8 max-w-xl">
              trung tâm dạy học ngoài giờ - chuyên bồi dưỡng văn hoá cho học sinh phổ thông.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-6 text-lg">
                Đăng ký học
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-center text-white">Kỳ thi Tốt nghiệp THPT năm 2025 còn</h3>
              <CountdownTimer targetDate="2025-06-01T00:00:00" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Class Schedule Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          LỊCH HỌC CÁC LỚP TẠI TRUNG TÂM - NĂM HỌC 2024-2025
        </h2>
        <p className="text-center mb-6">Địa chỉ: số 101 Làng Tăng Phú, P Tăng Nhơn Phú A, TP Thủ Đức, TP Hồ Chí Minh</p>

        <div className="overflow-x-auto rounded-lg shadow-lg">
          <Table className="w-full text-center border-collapse">
            <TableHeader>
              <TableRow className="border-2 border-blue-300">
                <TableHead className="bg-blue-700 text-white border-2 border-blue-300 text-center">
                  Lớp (khóa)
                </TableHead>
                <TableHead className="bg-blue-700 text-white border-2 border-blue-300 text-center">
                  T2
                </TableHead>
                <TableHead className="bg-blue-700 text-white border-2 border-blue-300 text-center">
                  T3
                </TableHead>
                <TableHead className="bg-blue-700 text-white border-2 border-blue-300 text-center">
                  T4
                </TableHead>
                <TableHead className="bg-blue-700 text-white border-2 border-blue-300 text-center">
                  T5
                </TableHead>
                <TableHead className="bg-blue-700 text-white border-2 border-blue-300 text-center">
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
                  className={`border-2 border-blue-300 ${index % 2 === 0 ? "bg-white" : "bg-[#DCEEFF]"}`}
                >
                  <TableCell className="font-medium border-2 border-blue-300 text-center">
                    {row.name}
                  </TableCell>
                  {row.slots.map((slot, i) => (
                    <TableCell key={i} className="border-2 border-blue-300 text-center">
                      {slot}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

          <div className="mt-6 text-center">
            <p className="mb-3">Có video bài giảng giúp học sinh vào sau học lại bài cũ để theo kịp lớp</p>
            <p className="mb-6">Liên hệ qua Zalo: 0912345678 - Đăng ký học tại: www.TrungTamAnhBinhMinh.vn</p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold" asChild>
              <Link href="/register">Đăng ký học</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* High Score Students Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            DANH SÁCH HỌC SINH ĐIỂM CAO tại Trung tâm Ánh Bình Minh - KHÓA THI TỐT NGHIỆP THPT NĂM 2024
          </h2>
          <HighScoreStudents />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Một số bài viết mới</h2>
          <RecentPosts />
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Một số hình ảnh về lớp</h2>
          <ClassGallery />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Một số hình ảnh về thầy</h2>
          <TeacherGallery />
        </div>
      </section>
    </main>
  )
}

