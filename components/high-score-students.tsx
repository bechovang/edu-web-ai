"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const students = [
  {
    name: "Nguyễn Phan Bảo Trân",
    score: 10.0,
    school: "chuyên",
    avatar: "/images/avatars/student1.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm tuyệt đối môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Lam Tông",
    score: 9.75,
    school: "",
    avatar: "/images/avatars/student2.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm gần tuyệt đối môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Trọng Ti",
    score: 9.75,
    school: "chuyên",
    avatar: "/images/avatars/student3.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh trường chuyên đạt điểm gần tuyệt đối môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Huỳnh San",
    score: 9.5,
    school: "",
    avatar: "/images/avatars/student4.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Anh Dương",
    score: 9.5,
    school: "",
    avatar: "/images/avatars/student5.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Huỳnh Phi Phụng",
    score: 9.5,
    school: "",
    avatar: "/images/avatars/student6.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Ngọc Xuân Nghĩ",
    score: 9.25,
    school: "",
    avatar: "/images/avatars/student7.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Đặng Mai Thiên Kim",
    score: 9.0,
    school: "",
    avatar: "/images/avatars/student8.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Ngô Nghĩa Trần",
    score: 9.0,
    school: "THPT ĐH",
    avatar: "/images/avatars/student9.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh THPT Đại học đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Ngọc Khánh",
    score: 8.75,
    school: "",
    avatar: "/images/avatars/student10.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh xuất sắc đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Vương Viên Thảo",
    score: 8.75,
    school: "Quốc tế",
    avatar: "/images/avatars/student11.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh trường Quốc tế đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Lê Thành Tôn",
    score: 8.5,
    school: "Thí sinh tự do",
    avatar: "/images/avatars/student12.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Thí sinh tự do đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
  {
    name: "Nguyễn Trọng Nghĩa",
    score: 8.5,
    school: "Phổ Thông Năng Khiếu, HCM",
    avatar: "/images/avatars/student13.jpg",
    scoreImage: "/placeholder.svg?height=800&width=600",
    description: "Học sinh trường Phổ Thông Năng Khiếu đạt điểm cao môn Hóa kỳ thi tốt nghiệp THPT 2024",
  },
]

export default function HighScoreStudents() {
  const [selectedStudent, setSelectedStudent] = useState<(typeof students)[0] | null>(null)

  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <Card
            key={index}
            className="overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => setSelectedStudent(student)}
          >
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 py-2">
                <Avatar className="h-20 w-20 border-2 border-blue-200 shadow-md">
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                    {getInitials(student.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
                  <h3 className="font-bold text-lg">{student.name}</h3>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-1">
                    <Badge className="bg-blue-600">{student.score.toFixed(2)} điểm</Badge>
                    {student.school && <Badge variant="outline">{student.school}</Badge>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedStudent} onOpenChange={(open) => !open && setSelectedStudent(null)}>
        <DialogContent className="max-w-3xl">
          {selectedStudent && (
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <Avatar className="h-32 w-32 border-3 border-blue-200 shadow-lg">
                  <AvatarImage src={selectedStudent.avatar} alt={selectedStudent.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-2xl">
                    {getInitials(selectedStudent.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left mt-4 sm:mt-0">
                  <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                    <Badge className="bg-blue-600 text-lg py-1">{selectedStudent.score.toFixed(2)} điểm</Badge>
                    {selectedStudent.school && (
                      <Badge variant="outline" className="text-lg py-1">
                        {selectedStudent.school}
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mt-3">{selectedStudent.description}</p>
                </div>
              </div>
              <div className="relative w-full h-[60vh]">
                <Image
                  src={selectedStudent.scoreImage || "/placeholder.svg"}
                  alt={`Bảng điểm của ${selectedStudent.name}`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">Bảng điểm kỳ thi tốt nghiệp THPT 2024</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

