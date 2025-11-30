import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

interface ContactData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

const SPREADSHEET_ID = "1HV2wwSmk4iLB_w-veQ40V-dj0h0Wrxqo--s0kl-ncm0";

async function getGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ họ tên và số điện thoại" },
        { status: 400 }
      );
    }

    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Số điện thoại không hợp lệ" },
        { status: 400 }
      );
    }

    const sheets = await getGoogleSheets();
    const now = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[now, data.name, data.phone, data.email || "", data.message || ""]],
      },
    });

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
