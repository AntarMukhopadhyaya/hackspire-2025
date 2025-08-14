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

    const { mentorEmail, mentorName, editMessage } = await request.json();

    // Validate required fields
    if (!mentorEmail || !mentorName || !editMessage) {
      return NextResponse.json(
        { error: "Mentor email, name, and edit message are required" },
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

    // Send edit request notification to admin
    const adminNotificationOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER, // Send to admin
      replyTo: mentorEmail,
      subject: `🔄 Mentor Edit Request - ${mentorName}`,
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%); color: #ffffff; padding: 0; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%); padding: 30px 20px; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">
            <h1 style="color: #0a0a0a; margin: 0; font-size: 28px; font-weight: 900; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
              🔄 MENTOR EDIT REQUEST
            </h1>
            <p style="color: #0a0a0a; margin: 10px 0 0 0; text-align: center; font-size: 16px; font-weight: 700; letter-spacing: 1px;">
              HACKSPIRE 2025 ADMIN NOTIFICATION
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <div style="background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 210, 63, 0.1) 100%); border: 2px solid rgba(255, 107, 53, 0.3); clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); padding: 25px; margin: 20px 0;">
              
              <h3 style="color: #ff6b35; margin: 0 0 20px 0; font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">
                📝 EDIT REQUEST DETAILS
              </h3>
              
              <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-left: 4px solid #ffd23f; margin: 15px 0;">
                <p style="margin: 0; color: #ffd23f; font-weight: 700; font-size: 14px; text-transform: uppercase;">MENTOR NAME</p>
                <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 18px; font-weight: 600;">${mentorName}</p>
              </div>
              
              <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <p style="margin: 0; color: #00d4ff; font-weight: 700; font-size: 14px; text-transform: uppercase;">MENTOR EMAIL</p>
                <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 18px; font-weight: 600;">${mentorEmail}</p>
              </div>
              
              <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-left: 4px solid #ff6b35; margin: 15px 0;">
                <p style="margin: 0; color: #ff6b35; font-weight: 700; font-size: 14px; text-transform: uppercase;">REQUEST TIME</p>
                <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 18px; font-weight: 600;">${new Date().toLocaleString()}</p>
              </div>
              
              <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-left: 4px solid #00ff88; margin: 15px 0;">
                <p style="margin: 0; color: #00ff88; font-weight: 700; font-size: 14px; text-transform: uppercase;">EDIT REQUEST MESSAGE</p>
                <div style="margin: 10px 0 0 0; padding: 15px; background: rgba(0, 0, 0, 0.5); border-radius: 5px; border: 1px solid rgba(0, 255, 136, 0.2);">
                  <p style="margin: 0; color: #ffffff; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${editMessage}</p>
                </div>
              </div>
            </div>
            
            <!-- Action Required -->
            <div style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%); border: 2px solid rgba(0, 212, 255, 0.3); clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px)); padding: 25px; margin: 20px 0; text-align: center;">
              <h3 style="color: #00d4ff; margin: 0 0 15px 0; font-size: 18px; font-weight: 900; text-transform: uppercase;">
                ⚡ ACTION REQUIRED
              </h3>
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin: 0;">
                This mentor has requested to edit their application. Please contact them directly to assist with their changes.
              </p>
            </div>
            
            <!-- Quick Actions -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${mentorEmail}?subject=Re: HackSpire 2025 Mentor Application Edit&body=Hi ${mentorName},%0D%0A%0D%0AWe received your request to edit your mentor application. We're here to help!%0D%0A%0D%0APlease let us know what changes you'd like to make and we'll assist you.%0D%0A%0D%0ABest regards,%0D%0AHackSpire 2025 Team" 
                 style="display: inline-block; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); color: #0a0a0a; text-decoration: none; font-weight: 900; font-size: 16px; padding: 15px 30px; clip-path: polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px); text-transform: uppercase; letter-spacing: 1px; margin: 10px;">
                📧 REPLY TO MENTOR
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: rgba(0, 0, 0, 0.8); padding: 20px; text-align: center; border-top: 2px solid rgba(255, 210, 63, 0.3);">
            <p style="margin: 0; color: #ffd23f; font-size: 14px; font-weight: 600;">
              HACKSPIRE 2025 ADMIN PANEL
            </p>
            <p style="margin: 5px 0 0 0; color: #888; font-size: 12px;">
              Auto-generated notification • ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
🔄 MENTOR EDIT REQUEST - HACKSPIRE 2025

A mentor has requested to edit their application:

MENTOR DETAILS:
- Name: ${mentorName}
- Email: ${mentorEmail}
- Request Time: ${new Date().toLocaleString()}

EDIT REQUEST MESSAGE:
"${editMessage}"

ACTION REQUIRED:
Please contact this mentor directly to assist with their application changes.

Reply to: ${mentorEmail}

---
HackSpire 2025 Admin Notification
${new Date().toLocaleString()}
      `,
    };

    // Send notification email to admin
    await transporter.sendMail(adminNotificationOptions);

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
