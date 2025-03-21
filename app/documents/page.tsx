import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, FileText, Video } from "lucide-react"

export default function DocumentsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">Tài liệu môn Hóa Lâm Mạnh Cường</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Trang tập hợp một số tài liệu miễn phí môn Hóa của thầy Lâm Mạnh Cường. Học sinh đăng ký lớp offline TPHCM, khóa
        online và thầy cô cần chuyển giao file word tài liệu môn Hóa vui lòng nhắn tin facebook Lâm Mạnh Cường hoặc Zalo
        0936975145.
      </p>

      <Tabs defaultValue="grade12" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="grade12">Lớp 12</TabsTrigger>
          <TabsTrigger value="grade11">Lớp 11</TabsTrigger>
          <TabsTrigger value="grade10">Lớp 10</TabsTrigger>
        </TabsList>

        <TabsContent value="grade12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Tài liệu môn Hóa lớp 12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Hóa 12 chương 1 lần 1", available: true },
                  { title: "Hóa 12 chương 2 lần 1", available: true },
                  { title: "Hóa 12 chương 3 lần 1", available: true },
                  { title: "Hóa 12 chương 4 lần 1", available: true },
                  { title: "Hóa 12 chương 5 lần 1", available: false },
                  { title: "Hóa 12 chương 6 lần 1", available: false },
                  { title: "Hóa 12 chương 7 lần 1", available: false },
                  { title: "Hóa 12 chương 8 lần 1", available: false },
                  { title: "Hóa 12 giữa HK1 lần 1", available: true },
                  { title: "Hóa 12 giữa HK1 lần 2", available: true },
                  { title: "Hóa 12 cuối HK1 lần 1", available: true },
                  { title: "Hóa 12 cuối HK1 lần 2", available: true },
                  { title: "Hóa 12 cuối HK1 lần 3", available: true },
                  { title: "Hóa 12 giữa HK2 lần 1", available: false },
                  { title: "Hóa 12 giữa HK2 lần 2", available: false },
                  { title: "Hóa 12 cuối HK2 lần 1", available: false },
                  { title: "Hóa 12 cuối HK2 lần 2", available: false },
                  { title: "Hóa 12 cuối HK2 lần 3", available: false },
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-2">
                      {item.available && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />}
                      <div className="flex-1">
                        <h3 className="font-medium mb-3">{item.title}</h3>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span>PDF</span>
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Video className="h-4 w-4" />
                            <span>Video</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grade11">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Tài liệu môn Hóa lớp 11</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Hóa 11 chương 1 lần 1", available: true },
                  { title: "Hóa 11 chương 2 lần 1", available: false },
                  { title: "Hóa 11 chương 3 lần 1", available: false },
                  { title: "Hóa 11 chương 4 lần 1", available: false },
                  { title: "Hóa 11 chương 5 lần 1", available: false },
                  { title: "Hóa 11 chương 6 lần 1", available: false },
                  { title: "Hóa 11 giữa HK1 lần 1", available: true },
                  { title: "Hóa 11 giữa HK1 lần 2", available: true },
                  { title: "Hóa 11 cuối HK1 lần 1", available: true },
                  { title: "Hóa 11 cuối HK1 lần 2", available: true },
                  { title: "Hóa 11 cuối HK1 lần 3", available: true },
                  { title: "Hóa 11 giữa HK2 lần 1", available: false },
                  { title: "Hóa 11 giữa HK2 lần 2", available: false },
                  { title: "Hóa 11 cuối HK2 lần 1", available: false },
                  { title: "Hóa 11 cuối HK2 lần 2", available: false },
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-2">
                      {item.available && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />}
                      <div className="flex-1">
                        <h3 className="font-medium mb-3">{item.title}</h3>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span>PDF</span>
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Video className="h-4 w-4" />
                            <span>Video</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grade10">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Tài liệu môn Hóa lớp 10</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Hóa 10 chương 1 lần 1", available: true },
                  { title: "Hóa 10 chương 2 lần 1", available: false },
                  { title: "Hóa 10 chương 3 lần 1", available: false },
                  { title: "Hóa 10 chương 4 lần 1", available: false },
                  { title: "Hóa 10 chương 5 lần 1", available: false },
                  { title: "Hóa 10 chương 6 lần 1", available: false },
                  { title: "Hóa 10 chương 7 lần 1", available: false },
                  { title: "Hóa 10 giữa HK1 lần 1", available: true },
                  { title: "Hóa 10 giữa HK1 lần 2", available: true },
                  { title: "Hóa 10 cuối HK1 lần 1", available: true },
                  { title: "Hóa 10 cuối HK1 lần 2", available: true },
                  { title: "Hóa 10 cuối HK1 lần 3", available: true },
                  { title: "Hóa 10 giữa HK2 lần 1", available: false },
                  { title: "Hóa 10 giữa HK2 lần 2", available: false },
                  { title: "Hóa 10 cuối HK2 lần 1", available: false },
                  { title: "Hóa 10 cuối HK2 lần 2", available: false },
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-2">
                      {item.available && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />}
                      <div className="flex-1">
                        <h3 className="font-medium mb-3">{item.title}</h3>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span>PDF</span>
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Video className="h-4 w-4" />
                            <span>Video</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

