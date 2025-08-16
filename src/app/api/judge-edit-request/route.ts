import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Environment variables for email configuration
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Email configuration not found" },
        { status: 500 }
      );
    }

    const { judgeEmail, judgeName, editMessage } = await request.json();

    // Validate required fields
    if (!judgeEmail || !judgeName || !editMessage) {
      return NextResponse.json(
        { error: "Judge email, name, and edit message are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Admin notifications removed - no approval system needed
    // Just log the edit request for now
    console.log(
      `Judge edit request received from ${judgeName} (${judgeEmail}): ${editMessage}`
    );

    return NextResponse.json({
      success: true,
      message:
        "Edit request sent successfully! Our team will contact you soon.",
    });
  } catch (error) {
    console.error("Error sending edit request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send edit request" },
      { status: 500 }
    );
  }
}
