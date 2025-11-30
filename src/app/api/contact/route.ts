import { NextRequest, NextResponse } from "next/server";

interface ContactData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

// Lưu trữ tạm thời (trong production nên dùng database)
const contacts: ContactData[] = [];

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ họ tên và số điện thoại" },
        { status: 400 }
      );
    }

    // Validate phone number format (Vietnam)
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Số điện thoại không hợp lệ" },
        { status: 400 }
      );
    }

    // Save contact (in production, save to database)
    const contact = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    contacts.push(contact);

    // Log for debugging (in production, send email notification)
    console.log("New contact submission:", contact);

    // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
    // await sendEmailNotification(contact);

    // TODO: Integrate with CRM or Google Sheets
    // await saveToGoogleSheets(contact);

    return NextResponse.json({
      success: true,
      message: "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra, vui lòng thử lại sau" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // API để lấy danh sách contacts (cần authentication trong production)
  return NextResponse.json({
    total: contacts.length,
    contacts: contacts.slice(-10), // Chỉ trả về 10 contacts gần nhất
  });
}
