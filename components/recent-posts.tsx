import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Chương trình học Hóa 12 cơ bản và nâng cao",
    excerpt: "Tổng hợp chương trình học Hóa 12 cơ bản và nâng cao cho năm học 2024-2025",
    date: "22/12/2024",
    author: "LamManhCuong",
    image: "/placeholder.svg?height=200&width=400",
    slug: "chuong-trinh-hoc-hoa-12",
  },
  {
    id: 2,
    title: "Chương trình học Hóa 11 cơ bản và nâng cao",
    excerpt: "Tổng hợp chương trình học Hóa 11 cơ bản và nâng cao cho năm học 2024-2025",
    date: "21/12/2024",
    author: "LamManhCuong",
    image: "/placeholder.svg?height=200&width=400",
    slug: "chuong-trinh-hoc-hoa-11",
  },
  {
    id: 3,
    title: "Chương trình học Hóa 10 cơ bản và nâng cao",
    excerpt: "Tổng hợp chương trình học Hóa 10 cơ bản và nâng cao cho năm học 2024-2025",
    date: "20/12/2024",
    author: "LamManhCuong",
    image: "/placeholder.svg?height=200&width=400",
    slug: "chuong-trinh-hoc-hoa-10",
  },
]

export default function RecentPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48 w-full">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-xl mb-2">
              <Link href={`/posts/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

