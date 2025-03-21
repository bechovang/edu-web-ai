import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lớp Hóa Thầy Lâm Mạnh Cường</h3>
            <p className="mb-2">Địa chỉ: số 101 Làng Tăng Phú, P Tăng Nhơn Phú A</p>
            <p className="mb-2">TP Thủ Đức, TP Hồ Chí Minh</p>
            <div className="flex items-center mt-4">
              <Phone className="h-5 w-5 mr-2" />
              <span>Zalo: 0971515451</span>
            </div>
            <div className="flex items-center mt-2">
              <Mail className="h-5 w-5 mr-2" />
              <span>Email: anhbinhminh.infor@gmail.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-blue-300 transition-colors">
                  Đăng ký học
                </Link>
              </li>
              <li>
                <Link href="/honor" className="hover:text-blue-300 transition-colors">
                  Vinh danh
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-blue-300 transition-colors">
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link href="/tuition" className="hover:text-blue-300 transition-colors">
                  Học phí
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/abmedu" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://zalo.me/659811059618688301" className="hover:text-blue-300 transition-colors font-semibold">
                Zalo
              </Link>
              <Link href="tel:0971515451" className="hover:text-blue-300 transition-colors">
                <Phone className="h-6 w-6" />
              </Link>
            </div>
          </div>



        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Trung tâm Ánh Bình Minh. Tất cả quyền được bảo lưu.</p>
          <p className="mt-2">Thiết kế bởi Ngọc Phúc</p>
        </div>
      </div>
    </footer>
  )
}

