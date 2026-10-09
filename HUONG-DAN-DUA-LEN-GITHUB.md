# Hướng dẫn đưa website Đ-LAB lên GitHub (không cần dùng git)

## Chuẩn bị
1. Tải file zip tôi gửi về máy, **giải nén** ra một thư mục tên `dlab`.
2. Mở thư mục `dlab`. Bên trong phải thấy: `index.html`, `index-cu.html`, và các thư mục `assets`, `css`, `js`, `hoc-tap`, `icdl` và `kham-pha`.

## Tải lên
1. Vào https://github.com/BlackFin87/thay-dinh và đăng nhập.
2. Bấm **Add file** → **Upload files**.
3. Mở thư mục `dlab` trên máy, **chọn tất cả file và thư mục bên trong** (Ctrl+A), kéo thả vào ô upload.
   - Đừng kéo cả thư mục `dlab` ngoài cùng và đừng tải file zip.
   - Chờ đến khi danh sách file hiện đủ, không còn thanh đang tải.
4. Kéo xuống cuối trang, ô "Commit changes" gõ: `Trang chủ mới Đ-LAB`.
5. Bấm **Commit changes**.

## Kiểm tra
1. Chờ khoảng 1 phút để Vercel cập nhật.
2. Mở website, bấm Ctrl+F5 (máy tính) để tải lại bản mới.
3. Thử: bấm 3 cổng ở trang chủ, nút Menu, ảnh Thầy Định, mở trên điện thoại.

## Nếu bị lỗi
- Trang trắng hoặc mất ảnh: thường do thiếu thư mục `assets`. Tải lên lại.
- Muốn quay lại bản cũ: vào repo → **Commits** → chọn lần commit trước → **Browse files**. GitHub lưu mọi phiên bản.
- Link cũ (`chon-khoi.html`, `ontapkhoi3hk1.html`, `ontapkhoi5hk1.html`) **không bị động đến**, vẫn dùng bình thường.
