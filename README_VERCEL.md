# Hướng dẫn triển khai Website lên Vercel

Dưới đây là các bước để bạn đưa website này lên Vercel một cách nhanh nhất:

## 1. Chuẩn bị
*   Đảm bảo bạn đã có tài khoản [Vercel](https://vercel.com/).
*   Đã cài đặt [Vercel CLI](https://vercel.com/docs/cli) (tùy chọn) hoặc kết nối qua GitHub.

## 2. Các bước triển khai qua GitHub (Khuyên dùng)
1.  **Đẩy code lên GitHub:** Tạo một repository mới trên GitHub và đẩy toàn bộ mã nguồn này lên đó.
2.  **Kết nối với Vercel:**
    *   Truy cập [Vercel Dashboard](https://vercel.com/dashboard).
    *   Nhấn **"Add New"** -> **"Project"**.
    *   Chọn repository GitHub bạn vừa tạo.
3.  **Cấu hình Project:**
    *   **Framework Preset:** Chọn `Vite`.
    *   **Root Directory:** `./`
    *   **Build Command:** `npm run build` (Mặc định).
    *   **Output Directory:** `dist` (Mặc định).
4.  **Nhấn "Deploy":** Vercel sẽ tự động build và cung cấp cho bạn một URL chính thức.

## 3. Cấu hình Biến môi trường (Environment Variables)
Để website hoạt động linh hoạt, bạn nên cấu hình các biến sau trong phần **Settings -> Environment Variables** trên Vercel:
*   `VITE_SHEET_URL`: Dán link CSV của Google Sheet vào đây (Nếu không có, website sẽ dùng link mặc định tôi đã cài sẵn).
*   `GEMINI_API_KEY`: (Nếu bạn có dùng tính năng AI) Dán API Key của Gemini vào đây.

## 4. Nhấn "Deploy"
Vercel sẽ tự động build và cung cấp cho bạn một URL chính thức.

## Lưu ý về Google Sheet
Website sử dụng link CSV công khai từ Google Sheet. Bạn không cần cấu hình thêm gì trên Vercel cho phần này, vì dữ liệu được lấy trực tiếp từ trình duyệt của người dùng.

## Cấu hình SPA (Đã có sẵn)
Tôi đã thêm file `vercel.json` để đảm bảo các đường dẫn (nếu có sau này) luôn hoạt động chính xác trên Vercel.
