"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"

const classImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Lớp luyện thi Hóa Quận 5 Thầy Lâm Mạnh Cường khóa 2005",
    caption: "Lớp luyện thi Hóa Quận 5 Thầy Lâm Mạnh Cường khóa 2005",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Kiểm tra định kỳ lớp luyện thi Hóa",
    caption: "Kiểm tra định kỳ lớp luyện thi Hóa",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Buổi học cuối lớp học thêm Hóa Thủ Đức khóa 2023",
    caption: "Buổi học cuối lớp học thêm Hóa Thủ Đức khóa 2023",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Phát sách lớp học thêm Hóa Quận 5 khóa 2023",
    caption: "Phát sách lớp học thêm Hóa Quận 5 khóa 2023",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Buổi học cuối lớp Hóa Thủ Đức TPHCM khóa 2021",
    caption: "Buổi học cuối lớp Hóa Thủ Đức TPHCM khóa 2021",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Ôn thi học sinh giỏi TPHCM lớp Hóa Thủ Đức khóa 2021",
    caption: "Ôn thi học sinh giỏi TPHCM lớp Hóa Thủ Đức khóa 2021",
  },
]

export default function ClassGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof classImages)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classImages.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-48 w-full">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
            <div className="p-3 text-sm text-center truncate">{image.caption}</div>
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

