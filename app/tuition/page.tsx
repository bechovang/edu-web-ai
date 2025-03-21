import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, BookOpen, CreditCard, Video } from "lucide-react"

export default function TuitionPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Học phí lớp Hóa Lâm Mạnh Cường</h1>

      <Tabs defaultValue="offline" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
          <TabsTrigger value="offline">Offline Quận 5</TabsTrigger>
          <TabsTrigger value="online">Online</TabsTrigger>
          <TabsTrigger value="group">Nhóm nhỏ</TabsTrigger>
          <TabsTrigger value="private">1:1 Online</TabsTrigger>
        </TabsList>

        <TabsContent value="offline">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">1. Học offline tại Quận 5 TPHCM</CardTitle>
              <CardDescription>Lớp luyện thi Hóa Quận 5 Thầy Lâm Mạnh Cường khóa 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Lớp học offline tại Quận 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Học phí:</h3>
                      <p>700.000 đ/tháng, đã bao gồm tài liệu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Địa chỉ lớp:</h3>
                      <p>Số 355, đường An Dương Vương, Phường 3, Quận 5, TPHCM (gần trường Đại học Sư phạm)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Thời gian học:</h3>
                      <p>Mỗi tuần học 1 buổi, mỗi buổi học 3 tiếng</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Nội dung học:</h3>
                      <p>Hóa 10-11-12, Luyện thi tốt nghiệp THPT, Luyện thi ĐGNL-HCM</p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/register">Đăng ký học</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="online">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">2. Học online tại website tuhochoa.vn</CardTitle>
              <CardDescription>Học Hóa online thầy Lâm Mạnh Cường tại tuhochoa.vn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Học online tại tuhochoa.vn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Học phí:</h3>
                      <p>750.000 đ/khóa học</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Website:</h3>
                      <p>Tự Học Hóa - www.tuhochoa.vn</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Thời gian học:</h3>
                      <p>Có thể học bất kỳ lúc nào đến khi kết thúc năm học</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Nội dung học:</h3>
                      <p>
                        Hóa 10-11-12, Luyện thi tốt nghiệp THPT, Luyện thi ĐGNL-HCM, Luyện thi HSG, Hóa đại cương ĐH,
                        Hóa hữu cơ ĐH
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="https://tuhochoa.vn/dkh/" target="_blank" rel="noopener noreferrer">
                      Đăng ký học
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="group">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">3. Học kèm 1:1 hoặc nhóm nhỏ tại Quận 5 TPHCM</CardTitle>
              <CardDescription>Học kèm Hóa thầy Lâm Mạnh Cường tại Quận 5 TPHCM</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Học kèm nhóm nhỏ tại Quận 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Học phí:</h3>
                      <ul className="list-disc list-inside pl-2 space-y-1">
                        <li>500.000 đ/giờ (kèm riêng 1:1)</li>
                        <li>800.000 đ/giờ (nhóm 2 học sinh)</li>
                        <li>900.000 đ/giờ (nhóm 3 học sinh)</li>
                        <li>1.000.000 đ/giờ (nhóm 4 học sinh)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Địa chỉ lớp:</h3>
                      <p>Số 355, đường An Dương Vương, Phường 3, Quận 5, TPHCM (gần trường Đại học Sư phạm)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Thời gian học:</h3>
                      <p>Sắp xếp qua Zalo 0936.975.145</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Nội dung học:</h3>
                      <p>
                        Luyện thi vào lớp 10 chuyên Hóa, Hóa 10-11-12, Luyện thi tốt nghiệp THPT, Luyện thi ĐGNL-HCM,
                        Luyện thi HSG, Hóa đại cương ĐH, Hóa hữu cơ ĐH
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/register">Đăng ký học</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="private">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">4. Học kèm 1:1 online</CardTitle>
              <CardDescription>Học kèm online Hóa thầy Lâm Mạnh Cường qua Google Meet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Học kèm 1:1 online"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Học phí:</h3>
                      <p>500.000 đ/giờ (chỉ kèm riêng 1:1)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Phương thức học:</h3>
                      <p>Học qua ứng dụng Zoom Online hoặc Google Meet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Thời gian học:</h3>
                      <p>Sắp xếp qua Zalo 0936.975.145</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Nội dung học:</h3>
                      <p>
                        Luyện thi vào lớp 10 chuyên Hóa, Hóa 10-11-12, Luyện thi tốt nghiệp THPT, Luyện thi ĐGNL-HCM,
                        Luyện thi HSG, Hóa đại cương ĐH, Hóa hữu cơ ĐH
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/register">Đăng ký học</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Thông tin thanh toán</h2>
        <p className="mb-4">Quý phụ huynh học sinh có thể đóng trực tiếp ở lớp hoặc chuyển khoản vào tài khoản sau:</p>

        <div className="bg-white p-4 rounded-lg border">
          <p className="font-medium">Techcombank (Ngân hàng TMCP Kỹ Thương Việt Nam):</p>
          <ul className="mt-2 space-y-1">
            <li>
              <span className="font-medium">Chủ tài khoản:</span> Lương Mạnh Cầm
            </li>
            <li>
              <span className="font-medium">Số tài khoản:</span> 3825101998
            </li>
            <li>
              <span className="font-medium">Chi nhánh:</span> Quận 5, TPHCM
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            Nội dung chuyển khoản là: [Họ và tên học sinh] + [Học phí tháng].
          </p>
        </div>
      </div>
    </main>
  )
}

