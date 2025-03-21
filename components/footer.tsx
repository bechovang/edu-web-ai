import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lớp Hóa Thầy Lâm Mạnh Cường</h3>
            <p className="mb-2">Địa chỉ: 355 An Dương Vương, Phường 3, Quận 5, TPHCM</p>
            <p className="mb-2">(gần trường ĐH Sư phạm)</p>
            <div className="flex items-center mt-4">
              <Phone className="h-5 w-5 mr-2" />
              <span>Zalo: 0936975145</span>
            </div>
            <div className="flex items-center mt-2">
              <Mail className="h-5 w-5 mr-2" />
              <span>Email: contact@lammanhcuong.vn</span>
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
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm">Đăng ký nhận thông tin mới nhất về lớp học và tài liệu</p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
                />
                <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Lớp Hóa Thầy Lâm Mạnh Cường. Tất cả quyền được bảo lưu.</p>
          <p className="mt-2">Thiết kế bởi Mạnh Cảm</p>
        </div>
      </div>
    </footer>
  )
}

