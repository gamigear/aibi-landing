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
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google credentials");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    console.log("Received data:", data);

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ họ tên và số điện thoại" },
        { status: 400 }
      );
    }

    const sheets = await getGoogleSheets();
    const now = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    console.log("Appending to sheet:", SPREADSHEET_ID);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[now, data.name, data.phone, data.email || "", data.message || ""]],
      },
    });

    console.log("Sheet response:", response.status);

    return NextResponse.json({
      success: true,
      message: "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra, vui lòng thử lại sau", details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: "API is working",
    hasCredentials: !!(process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY)
  });
}
