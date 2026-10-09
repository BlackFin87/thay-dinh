/* ĐỂ THÊM NỘI DUNG CHO MỘT BÀI: tìm bài đó bên dưới, sửa các dòng sau rồi lưu:
   trangthai: "san-sang"            (bài chưa làm thì để "sap-co")
   tomtat:    ["Ý cần nhớ 1", "Ý cần nhớ 2"]
   video:     "ID_YOUTUBE"          (đoạn sau v= trong link YouTube, ví dụ dQw4w9WgXcQ)
   anh:       ["bai05-1.jpg"]       (ảnh bỏ trong thư mục assets/bai/khoi3/)
   app:       "apps/khoi3/bai05/"   (thư mục ứng dụng nhỏ, có file index.html)
   Mục nào chưa có thì để "" hoặc [] — trang tự ẩn mục đó. */
const B = (so, ten) => ({ so, ten, trangthai: "sap-co", tomtat: [], video: "", anh: [], app: "" });
window.DLAB = { khoi: {
  3: { ten: "Tin học 3", sach: "Kết nối tri thức với cuộc sống", chude: [
    { ten: "Chủ đề 1. Máy tính và em", bai: [
      B(1, "Thông tin và quyết định"), B(2, "Xử lí thông tin"), B(3, "Máy tính và em"),
      B(4, "Làm việc với máy tính"), B(5, "Sử dụng bàn phím") ] },
    { ten: "Chủ đề 2. Mạng máy tính và Internet", bai: [ B(6, "Khám phá thông tin trên Internet") ] },
    { ten: "Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", bai: [
      B(7, "Sắp xếp để dễ tìm"), B(8, "Sơ đồ hình cây. Tổ chức thông tin trong máy tính"),
      B(9, "Thực hành với tệp và thư mục trong máy tính") ] },
    { ten: "Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số", bai: [ B(10, "Bảo vệ thông tin khi dùng máy tính") ] },
    { ten: "Chủ đề 5. Ứng dụng tin học", bai: [
      B(11, "Bài trình chiếu của em"), B(12, "Tìm hiểu về thế giới tự nhiên"), B(13, "Luyện tập sử dụng chuột") ] },
    { ten: "Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", bai: [
      B(14, "Em thực hiện công việc như thế nào?"), B(15, "Công việc thực hiện theo điều kiện"),
      B(16, "Công việc của em và sự trợ giúp của máy tính") ] }
  ] },
  4: { ten: "Tin học 4", sach: "Kết nối tri thức với cuộc sống", chude: [] },
  5: { ten: "Tin học 5", sach: "Kết nối tri thức với cuộc sống", chude: [] }
} };
