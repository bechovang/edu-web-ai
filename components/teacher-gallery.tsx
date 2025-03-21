"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"

const teacherImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=400",
    alt: "60 phút học hóa mỗi ngày",
    caption: "60 phút học hóa mỗi ngày - ESTE - CACBOHIDRAT",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Lễ bảo vệ khóa luận tốt nghiệp",
    caption: "Lễ bảo vệ khóa luận tốt nghiệp - Chương trình cử nhân tài năng niên khóa 2016-2020",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Xuất bản sách luyện thi Hóa",
    caption: "Xuất bản sách luyện thi Hóa tại NXB Tổng hợp TPHCM (2016)",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Thủ khoa chuyên Hóa",
    caption: "Thủ khoa chuyên Hóa trường THPT chuyên Nguyễn Bình Khiêm, Vĩnh Long (2013-2016)",
  },
]

export default function TeacherGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof teacherImages)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {teacherImages.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-64 w-full">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
            <div className="p-3 text-sm text-center">{image.caption}</div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="flex flex-col items-center">
              <div className="relative w-full h-[60vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center">{selectedImage.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

