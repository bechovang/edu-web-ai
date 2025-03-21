import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, CreditCard } from "lucide-react"

export default function RegisterPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Đăng ký học</h1>

        <div className="mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
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
            <div className="mt-3 text-center text-sm">
              <p>Có video bài giảng giúp học sinh vào sau học lại bài cũ để theo kịp lớp</p>
              <p>
                Liên hệ qua Zalo: <span className="font-medium">0912345678</span> • Đăng ký học tại:{" "}
                <span className="font-medium">www.TrungTamAnhBinhMinh.vn</span>
              </p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Thông tin đăng ký</CardTitle>
            <CardDescription>Vui lòng điền đầy đủ thông tin để đăng ký lớp học Hóa thầy Lâm Mạnh Cường</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Họ và tên <span className="text-red-500">*</span>
                </Label>
                <Input id="fullName" placeholder="Nhập họ và tên học sinh" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="facebook">
                  Link học viên Facebook <span className="text-red-500">*</span>
                </Label>
                <Input id="facebook" placeholder="Nhập link Facebook của học viên" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school">
                  Trường đang học <span className="text-red-500">*</span>
                </Label>
                <Input id="school" placeholder="Nhập tên trường đang học" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Số điện thoại học sinh <span className="text-red-500">*</span>
                </Label>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 flex items-center justify-center border rounded-l-md bg-gray-100">
                    <span>+84</span>
                  </div>
                  <Input id="phone" placeholder="912 345 678" className="rounded-l-none" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentPhone">
                  Số điện thoại phụ huynh <span className="text-red-500">*</span>
                </Label>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 flex items-center justify-center border rounded-l-md bg-gray-100">
                    <span>+84</span>
                  </div>
                  <Input id="parentPhone" placeholder="912 345 678" className="rounded-l-none" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>
                  Lớp đăng ký <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="class-12A" />
                    <Label htmlFor="class-12A" className="font-normal">
                      12A-2007 | T2 18:00-21:00
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="class-12B" />
                    <Label htmlFor="class-12B" className="font-normal">
                      12B-2007 | T5 18:00-21:00
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="class-12C" />
                    <Label htmlFor="class-12C" className="font-normal">
                      12C-2007 | T7 13:30-16:30
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="class-12D" />
                    <Label htmlFor="class-12D" className="font-normal">
                      12D-2007 | CN 13:30-16:30
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="class-11A" />
                    <Label htmlFor="class-11A" className="font-normal">
                      11A-2008 | T3 18:00-21:00
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="class-11B" />
                    <Label htmlFor="class-11B" className="font-normal">
                      11B-2008 | T7 18:00-21:00
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="class-10A" />
                    <Label htmlFor="class-10A" className="font-normal">
                      10A-2009 | T4 18:00-21:00
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Ghi chú (nếu có)</Label>
                <Textarea id="note" placeholder="Nhập ghi chú nếu có" />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Đăng ký
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Thông tin thanh toán</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <p>Địa chỉ lớp: Số 355, đường An Dương Vương, Phường 3, Quận 5, TPHCM (gần trường Đại học Sư phạm)</p>
            </div>
            <div className="flex items-start gap-2">
              <CreditCard className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <p>Học phí các lớp đều là 700.000 đ/tháng.</p>
            </div>
            <div>
              <p className="font-medium mb-2">
                Quý phụ huynh/học sinh có thể đóng trực tiếp ở lớp hoặc chuyển khoản vào tài khoản sau:
              </p>
              <div className="bg-white p-4 rounded-lg border ml-7">
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
          </div>
        </div>
      </div>
    </main>
  )
}

