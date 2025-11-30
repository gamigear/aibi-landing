# AIBI Landing Page - Next.js + Tailwind CSS

Landing page bán sản phẩm Máy Năng Lượng Cộng Hưởng Sinh Học AIBI.

## 🚀 Công nghệ sử dụng

- **Next.js 16** - React framework với App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Font Awesome** - Icons

## 📦 Cài đặt

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 🏗️ Build Production

```bash
npm run build
npm start
```

## 📁 Cấu trúc dự án

```
aibi-landing/
├── public/
│   └── media/           # Hình ảnh sản phẩm
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/ # API xử lý form liên hệ
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/      # React components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Benefits.tsx
│       ├── Gallery.tsx
│       ├── VideoSection.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       └── FloatingCTA.tsx
└── package.json
```

## 🌐 Triển khai

### Vercel (Khuyến nghị)

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### VPS/Server

```bash
# Build
npm run build

# Start với PM2
pm2 start npm --name "aibi-landing" -- start
```

## 🔧 API Endpoints

### POST /api/contact
Nhận thông tin liên hệ từ form.

**Request Body:**
```json
{
  "name": "Nguyễn Văn A",
  "phone": "0981237386",
  "email": "email@example.com",
  "message": "Nội dung tư vấn"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Cảm ơn bạn đã đăng ký!"
}
```

## 📧 Tích hợp Email (TODO)

Để gửi email thông báo khi có form mới, cài đặt:

```bash
npm install nodemailer @sendgrid/mail
```

## 🗄️ Tích hợp Database (TODO)

Để lưu trữ contacts vào database:

```bash
# MongoDB
npm install mongoose

# PostgreSQL
npm install prisma @prisma/client
```

## 📱 Thông tin liên hệ

- **Hotline:** 0981 237 386
- **Email:** contact@aibi.vn
- **Website:** https://aibi.vn
- **Địa chỉ:** Số 8 Ngõ 121 Thái Hà, Đống Đa, Hà Nội
