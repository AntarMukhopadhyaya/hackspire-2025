import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  verifyTurnstileToken,
  getTurnstileErrorMessage,
} from "@/lib/turnstile";

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

    const data = await request.json();

    // Verify Turnstile token first
    const { turnstileToken, ...mentorData } = data;

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Bot verification required" },
        { status: 400 }
      );
    }

    try {
      const clientIP =
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown";
      const turnstileResult = await verifyTurnstileToken(
        turnstileToken,
        clientIP
      );

      if (!turnstileResult.success) {
        const errorMessage = getTurnstileErrorMessage(
          turnstileResult["error-codes"]
        );
        return NextResponse.json(
          { error: `Verification failed: ${errorMessage}` },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error("Turnstile verification error:", error);
      return NextResponse.json(
        { error: "Verification service unavailable" },
        { status: 503 }
      );
    }

    // Submit to Google Apps Script
    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mentorData), // Send data without the turnstile token
    });

    const result = await response.json();

    if (result.success) {
      // Send confirmation email to mentor
      await sendConfirmationEmail(data);

      return NextResponse.json({
        success: true,
        message:
          "Application submitted successfully! Check your email for confirmation.",
      });
    } else {
      throw new Error(result.error || "Submission failed");
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}

async function sendConfirmationEmail(mentorData: any) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Cyberpunk-themed confirmation email
    const confirmationMailOptions = {
      from: GMAIL_USER,
      to: mentorData.email,
      subject: "🚀 Welcome to HackSpire 2025 Mentor Network!",
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%); color: #ffffff; padding: 0; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">

          <!-- Mobile Responsive Styles -->
          <style>
            @media only screen and (max-width: 600px) {
              .mobile-stack { display: block !important; width: 100% !important; }
              .mobile-padding { padding: 20px 15px !important; }
              .mobile-text { font-size: 14px !important; line-height: 1.6 !important; }
              .mobile-title { font-size: 24px !important; }
              .mobile-subtitle { font-size: 16px !important; }
              .mobile-button { padding: 12px 20px !important; font-size: 14px !important; margin: 5px !important; }
              .mobile-grid { display: block !important; }
              .mobile-grid-item { margin-bottom: 15px !important; }
            }
          </style>

          <!-- Cyberpunk Header -->
          <div class="mobile-padding" style="background: linear-gradient(135deg, #ffd23f 0%, #f7931e 50%, #ff6b35 100%); padding: 30px 20px; position: relative; overflow: hidden; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%); -webkit-clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">

            <!-- Tech Grid Pattern -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image:
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
              background-size: 20px 20px; opacity: 0.3;"></div>

            <!-- Glitch Effect Lines -->
            <div style="position: absolute; top: 10px; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, transparent 0%, #000 20%, transparent 40%, #000 60%, transparent 80%, #000 100%); opacity: 0.2;"></div>
            <div style="position: absolute; bottom: 10px; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, #000 0%, transparent 20%, #000 40%, transparent 60%, #000 80%, transparent 100%); opacity: 0.2;"></div>

            <h1 class="mobile-title" style="color: #0a0a0a; margin: 0; font-size: 32px; font-weight: 900; text-align: center; text-transform: uppercase; letter-spacing: 3px; position: relative; z-index: 2; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
              🚀 MENTOR ACTIVATED
            </h1>
            <p class="mobile-subtitle" style="color: #0a0a0a; margin: 10px 0 0 0; text-align: center; font-size: 18px; font-weight: 700; position: relative; z-index: 2; letter-spacing: 1px;">
              HACKSPIRE 2025 • CYBERPUNK EDITION
            </p>
          </div>

          <!-- Main Content -->
          <div class="mobile-padding" style="padding: 40px 30px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); position: relative;">

            <!-- Circuit Lines Background -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.1;">
              <div style="position: absolute; top: 20%; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, transparent 0%, #ffd23f 50%, transparent 100%);"></div>
              <div style="position: absolute; top: 60%; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, transparent 0%, #ff6b35 50%, transparent 100%);"></div>
              <div style="position: absolute; top: 0; left: 20%; width: 1px; height: 100%; background: linear-gradient(0deg, transparent 0%, #ffd23f 50%, transparent 100%);"></div>
              <div style="position: absolute; top: 0; right: 20%; width: 1px; height: 100%; background: linear-gradient(0deg, transparent 0%, #ff6b35 50%, transparent 100%);"></div>
            </div>

            <!-- Welcome Message -->
            <div style="text-align: center; margin-bottom: 40px; position: relative; z-index: 2;">
              <div style="display: inline-block; background: linear-gradient(135deg, #ffd23f 0%, #f7931e 100%); padding: 15px 30px; clip-path: polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px); margin-bottom: 20px;">
                <h2 style="color: #0a0a0a; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;">
                  WELCOME TO THE MATRIX, ${mentorData.name.toUpperCase()}
                </h2>
              </div>
              <p style="color: #00d4ff; font-size: 18px; font-weight: 600; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1px;">
                >> MENTOR APPLICATION RECEIVED <<
              </p>
              <p class="mobile-text" style="color: #ffffff; font-size: 16px; line-height: 1.8; margin: 0;">
                Your application to join the <strong style="color: #ffd23f;">HackSpire 2025 Mentor Network</strong> has been successfully processed and uploaded to our quantum database. Our cybernetic review system is now analyzing your profile.
              </p>
            </div>

            <!-- Application Summary -->
            <div style="background: linear-gradient(135deg, rgba(255, 210, 63, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%); border: 2px solid rgba(255, 210, 63, 0.3); clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px)); padding: 30px; margin: 30px 0; position: relative;">

              <!-- Corner Accents -->
              <div style="position: absolute; top: 0; right: 0; width: 0; height: 0; border-left: 20px solid transparent; border-top: 20px solid #ffd23f; opacity: 0.7;"></div>
              <div style="position: absolute; bottom: 0; left: 0; width: 0; height: 0; border-right: 20px solid transparent; border-bottom: 20px solid #ff6b35; opacity: 0.7;"></div>

              <h3 style="color: #ffd23f; margin: 0 0 25px 0; font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; text-align: center;">
                📊 APPLICATION DATA MATRIX
              </h3>

              <div class="mobile-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div class="mobile-grid-item" style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-left: 4px solid #00d4ff; position: relative;">
                  <div style="position: absolute; top: 5px; right: 5px; width: 8px; height: 8px; background: #00d4ff; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
                  <p style="margin: 0; color: #00d4ff; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">IDENTITY</p>
                  <p class="mobile-text" style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 600;">${
                    mentorData.name
                  }</p>
                </div>
                <div class="mobile-grid-item" style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-left: 4px solid #ffd23f; position: relative;">
                  <div style="position: absolute; top: 5px; right: 5px; width: 8px; height: 8px; background: #ffd23f; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
                  <p style="margin: 0; color: #ffd23f; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">ORGANIZATION</p>
                  <p class="mobile-text" style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 600;">${
                    mentorData.company || "Independent"
                  }</p>
                </div>
              </div>

              ${
                mentorData.hackathonProof
                  ? `
              <div style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-left: 4px solid #00d4ff; position: relative; margin-bottom: 20px;">
                <div style="position: absolute; top: 5px; right: 5px; width: 8px; height: 8px; background: #00d4ff; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
                <p style="margin: 0; color: #00d4ff; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">HACKATHON PROOF</p>
                <p class="mobile-text" style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                  <a href="${mentorData.hackathonProof}" style="color: #ffd23f; text-decoration: none;" target="_blank">View Proof Link</a>
                </p>
              </div>
              `
                  : ""
              }

              <div style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-left: 4px solid #ff6b35; position: relative;">
                <div style="position: absolute; top: 5px; right: 5px; width: 8px; height: 8px; background: #ff6b35; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
                <p style="margin: 0; color: #ff6b35; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">EXPERTISE MATRIX</p>
                <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 600;">${
                  Array.isArray(mentorData.expertise)
                    ? mentorData.expertise.join(" • ")
                    : mentorData.expertise
                }</p>
              </div>
            </div>

            <!-- Next Steps -->
            <div style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%); border: 2px solid rgba(0, 212, 255, 0.3); clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); padding: 30px; margin: 30px 0; text-align: center; position: relative;">

              <!-- Animated Dots -->
              <div style="position: absolute; top: 10px; left: 10px; width: 6px; height: 6px; background: #00d4ff; border-radius: 50%; opacity: 0.8;"></div>
              <div style="position: absolute; top: 10px; right: 10px; width: 6px; height: 6px; background: #00d4ff; border-radius: 50%; opacity: 0.6;"></div>
              <div style="position: absolute; bottom: 10px; left: 10px; width: 6px; height: 6px; background: #00d4ff; border-radius: 50%; opacity: 0.4;"></div>
              <div style="position: absolute; bottom: 10px; right: 10px; width: 6px; height: 6px; background: #00d4ff; border-radius: 50%; opacity: 0.8;"></div>

              <h3 style="color: #00d4ff; margin: 0 0 20px 0; font-size: 22px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;">
                🔄 PROCESSING STATUS
              </h3>

              <div style="background: rgba(0, 0, 0, 0.4); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ffffff; font-size: 16px; line-height: 1.8; margin: 0;">
                  <strong style="color: #00d4ff;">PHASE 1:</strong> Application received and stored in quantum database<br>
                  <strong style="color: #ffd23f;">PHASE 2:</strong> Profile analysis by our cybernetic review team<br>
                  <strong style="color: #ff6b35;">PHASE 3:</strong> Mentor network integration and activation
                </p>
              </div>

              <p class="mobile-text" style="color: #ffffff; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                Our team will review your application within <strong style="color: #ffd23f;">48-72 hours</strong>. You'll receive further instructions via encrypted transmission to this neural link.
              </p>
            </div>

            <!-- Action Buttons Section -->
            <div style="background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%); border: 2px solid rgba(255, 107, 53, 0.3); clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); padding: 30px; margin: 30px 0; text-align: center;">
              <h3 style="color: #ff6b35; margin: 0 0 20px 0; font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;">
                🛠️ NEED TO MAKE CHANGES?
              </h3>

              <p class="mobile-text" style="color: #ffffff; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                If you need to edit your application, click the button below and our team will contact you to assist with the changes.
              </p>

              <div style="margin: 20px 0;">
                <a href="${
                  process.env.NEXTAUTH_URL || "https://hackspire.tech"
                }/mentor-edit-request?email=${encodeURIComponent(
        mentorData.email
      )}&name=${encodeURIComponent(mentorData.name)}"
                   class="mobile-button" style="display: inline-block; background: linear-gradient(135deg, #ffd23f 0%, #f7931e 100%); color: #0a0a0a; text-decoration: none; font-weight: 900; font-size: 16px; padding: 15px 30px; clip-path: polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px); text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 8px 20px rgba(255, 210, 63, 0.3); margin: 10px;">
                  ✏️ REQUEST EDIT
                </a>
              </div>

              <div style="border-top: 1px solid rgba(255, 107, 53, 0.3); margin: 30px 0 20px 0; padding-top: 20px;">
                <h4 style="color: #ff6b35; margin: 0 0 15px 0; font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">
                  🌐 JOIN THE RESISTANCE
                </h4>

                <p style="color: #ffffff; font-size: 14px; line-height: 1.6; margin: 0 0 20px 0;">
                  Connect with fellow hackers and mentors in our digital underground.
                </p>

                <a href="https://discord.gg/8qpHgECDH3" class="mobile-button" style="display: inline-block; background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); color: #0a0a0a; text-decoration: none; font-weight: 900; font-size: 14px; padding: 12px 25px; clip-path: polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px); text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);">
                  🎮 ENTER DISCORD MATRIX
                </a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 46, 0.8) 100%); padding: 25px; text-align: center; border-top: 2px solid rgba(255, 210, 63, 0.3);">
            <div style="display: inline-block; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); padding: 12px 25px; clip-path: polygon(5px 0%, 100% 0%, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0% 100%, 0% 5px); margin-bottom: 15px;">
              <p style="margin: 0; color: #0a0a0a; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                🔒 TRANSMISSION COMPLETE
              </p>
            </div>

            <p style="margin: 0; color: #00d4ff; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
              HACKSPIRE 2025 MENTOR NETWORK
            </p>
            <p style="margin: 5px 0 0 0; color: #888; font-size: 12px;">
              Timestamp: ${new Date().toLocaleString()} | Status: ENCRYPTED
            </p>
          </div>
        </div>
      `,
      text: `
🚀 WELCOME TO HACKSPIRE 2025 MENTOR NETWORK!

Dear ${mentorData.name},

Your mentor application has been successfully received and processed!

APPLICATION SUMMARY:
- Name: ${mentorData.name}
- Email: ${mentorData.email}
- Company: ${mentorData.company || "Independent"}
- Expertise: ${
        Array.isArray(mentorData.expertise)
          ? mentorData.expertise.join(", ")
          : mentorData.expertise
      }${
        mentorData.hackathonProof
          ? `
- Hackathon Proof: ${mentorData.hackathonProof}`
          : ""
      }

NEXT STEPS:
Our team will review your application within 48-72 hours. You'll receive further instructions via email.

JOIN OUR COMMUNITY:
Discord: https://discord.gg/8qpHgECDH3

Thank you for joining the HackSpire 2025 revolution!

---
HackSpire 2025 Team
Timestamp: ${new Date().toLocaleString()}
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);
    console.log("Confirmation email sent to:", mentorData.email);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    // Don't throw error - we don't want to fail the whole submission if email fails
  }
}
