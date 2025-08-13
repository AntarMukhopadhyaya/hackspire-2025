import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Hardcoded credentials and NextAuth config as requested
const GMAIL_USER = "acmfiem@gmail.com";
// TODO: Replace with the actual 16-character Gmail App Password for the above account
const GMAIL_APP_PASSWORD = "vkyvtpgectmxplbf";
const NEXTAUTH_SECRET =
  "f4b23c7d1de74a13a3d8a2f4f7a9c3b6b1e2d3c4a5f6a7b8c9d0e1f2a3b4c5d6";
const NEXTAUTH_URL = "https://hackspire.tech";
const NEXTAUTH_URL_LOCAL = "http://localhost:3000";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP (hardcoded)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER, // Where to send contact form submissions
      replyTo: email, // Reply-to will be the sender's email
      subject: `Contact Form: ${subject}`,
      headers: {
        "X-NextAuth-URL": NEXTAUTH_URL,
        "X-NextAuth-URL-Local": NEXTAUTH_URL_LOCAL,
      },
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%); color: #ffffff; padding: 0; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          
          <!-- Techy Header with Polygon Design -->
          <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%); padding: 30px 20px; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><polygon points=\"0,0 100,0 100,100 0,100\" fill=\"none\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"2\"/><polygon points=\"20,20 80,20 80,80 20,80\" fill=\"none\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1\"/></svg>') repeat; opacity: 0.1;"></div>
            
            <!-- Polygon Corner Accents -->
            <div style="position: absolute; top: 0; left: 0; width: 0; height: 0; border-left: 20px solid transparent; border-top: 20px solid #0a0a0a;"></div>
            <div style="position: absolute; top: 0; right: 0; width: 0; height: 0; border-right: 20px solid transparent; border-top: 20px solid #0a0a0a;"></div>
            
            <h2 style="color: #0a0a0a; margin: 0; font-size: 28px; font-weight: 700; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); position: relative; z-index: 2;">
              🚀 NEW CONTACT FORM SUBMISSION
            </h2>
            <p style="color: #0a0a0a; margin: 10px 0 0 0; text-align: center; font-size: 16px; font-weight: 500; position: relative; z-index: 2;">
              HackSpire 2025 - Cyberpunk Edition
            </p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 30px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);">
            
            <!-- Contact Details Section -->
            <div style="background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%); border: 2px solid rgba(255, 107, 53, 0.3); border-radius: 15px; padding: 25px; margin: 20px 0; position: relative; overflow: hidden;">
              <!-- Polygon Border Effect -->
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 30%, rgba(255, 107, 53, 0.1) 30%, rgba(255, 107, 53, 0.1) 70%, transparent 70%); clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);"></div>
              
              <h3 style="color: #ff6b35; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; position: relative; z-index: 2;">
                📋 CONTACT DETAILS
              </h3>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; position: relative; z-index: 2;">
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 10px; border-left: 4px solid #ff6b35;">
                  <p style="margin: 0; color: #ffd23f; font-weight: 600; font-size: 14px; text-transform: uppercase;">NAME</p>
                  <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px;">${name}</p>
                </div>
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 10px; border-left: 4px solid #f7931e;">
                  <p style="margin: 0; color: #ffd23f; font-weight: 600; font-size: 14px; text-transform: uppercase;">EMAIL</p>
                  <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px;">${email}</p>
                </div>
              </div>
              
              <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 10px; border-left: 4px solid #ffd23f; margin-top: 15px;">
                <p style="margin: 0; color: #ffd23f; font-weight: 600; font-size: 14px; text-transform: uppercase;">SUBJECT</p>
                <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px;">${subject}</p>
              </div>
            </div>
            
            <!-- Message Section -->
            <div style="background: linear-gradient(135deg, rgba(22, 33, 62, 0.8) 0%, rgba(26, 26, 46, 0.8) 100%); border: 2px solid rgba(255, 215, 63, 0.3); border-radius: 15px; padding: 25px; margin: 20px 0; position: relative; overflow: hidden;">
              <!-- Tech Pattern Background -->
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(circle at 25% 25%, rgba(255, 215, 63, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.05) 0%, transparent 50%);"></div>
              
              <h3 style="color: #ffd23f; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; position: relative; z-index: 2;">
                💬 MESSAGE CONTENT
              </h3>
              
              <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 10px; border: 1px solid rgba(255, 215, 63, 0.2); position: relative; z-index: 2;">
                <p style="margin: 0; color: #ffffff; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${message.replace(
                  /\n/g,
                  "\n"
                )}</p>
              </div>
            </div>
            
            <!-- Footer Section -->
            <div style="background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%); border-top: 2px solid rgba(255, 107, 53, 0.3); padding: 25px; margin: 20px -30px -30px -30px; text-align: center;">
              <div style="display: inline-block; background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); padding: 12px 25px; border-radius: 25px; margin-bottom: 15px;">
                <p style="margin: 0; color: #0a0a0a; font-weight: 600; font-size: 14px;">
                  🔒 SECURE TRANSMISSION
                </p>
              </div>
              
              <p style="margin: 0; color: #ffd23f; font-size: 14px; font-weight: 500;">
                This message was sent from the HackSpire 2025 contact form
              </p>
              <p style="margin: 5px 0 0 0; color: #888; font-size: 12px;">
                Timestamp: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}

Message:
${message}

---
This email was sent from the HackSpire 2025 contact form.
Timestamp: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to sender
    const confirmationMailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: "Thank you for contacting HackSpire 2025",
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%); color: #ffffff; padding: 0; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          
          <!-- Techy Header with Polygon Design -->
          <div style="background: linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #0066ff 100%); padding: 30px 20px; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><polygon points=\"0,0 100,0 100,100 0,100\" fill=\"none\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"2\"/><polygon points=\"20,20 80,20 80,80 20,80\" fill=\"none\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"1\"/></svg>') repeat; opacity: 0.1;"></div>
            
            <!-- Polygon Corner Accents -->
            <div style="position: absolute; top: 0; left: 0; width: 0; height: 0; border-left: 20px solid transparent; border-top: 20px solid #0a0a0a;"></div>
            <div style="position: absolute; top: 0; right: 0; width: 0; height: 0; border-right: 20px solid transparent; border-top: 20px solid #0a0a0a;"></div>
            
            <h2 style="color: #0a0a0a; margin: 0; font-size: 28px; font-weight: 700; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); position: relative; z-index: 2;">
              🎉 THANK YOU FOR CONTACTING US!
            </h2>
            <p style="color: #0a0a0a; margin: 10px 0 0 0; text-align: center; font-size: 16px; font-weight: 500; position: relative; z-index: 2;">
              HackSpire 2025 - Cyberpunk Edition
            </p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 30px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);">
            
            <!-- Greeting Section -->
            <div style="text-align: center; margin-bottom: 30px;">
              <p style="color: #00d4ff; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
                Dear ${name},
              </p>
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin: 0;">
                Thank you for reaching out to <strong>HackSpire 2025</strong>. We have received your message and will get back to you as soon as possible.
              </p>
            </div>
            
            <!-- Message Summary Section -->
            <div style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%); border: 2px solid rgba(0, 212, 255, 0.3); border-radius: 15px; padding: 25px; margin: 20px 0; position: relative; overflow: hidden;">
              <!-- Tech Pattern Background -->
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 102, 255, 0.05) 0%, transparent 50%);"></div>
              
              <h3 style="color: #00d4ff; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; position: relative; z-index: 2;">
                📝 YOUR MESSAGE SUMMARY
              </h3>
              
              <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 10px; border: 1px solid rgba(0, 212, 255, 0.2); position: relative; z-index: 2;">
                <div style="margin-bottom: 15px;">
                  <p style="margin: 0; color: #00d4ff; font-weight: 600; font-size: 14px; text-transform: uppercase;">SUBJECT</p>
                  <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px;">${subject}</p>
                </div>
                <div>
                  <p style="margin: 0; color: #00d4ff; font-weight: 600; font-size: 14px; text-transform: uppercase;">MESSAGE PREVIEW</p>
                  <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 16px; line-height: 1.6;">${message.substring(
                    0,
                    100
                  )}${message.length > 100 ? "..." : ""}</p>
                </div>
              </div>
            </div>
            
            <!-- Discord Community Section -->
            <div style="background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%); border: 2px solid rgba(255, 107, 53, 0.3); border-radius: 15px; padding: 25px; margin: 20px 0; text-align: center; position: relative; overflow: hidden;">
              <!-- Polygon Border Effect -->
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 30%, rgba(255, 107, 53, 0.1) 30%, rgba(255, 107, 53, 0.1) 70%, transparent 70%); clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);"></div>
              
              <h3 style="color: #ff6b35; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; position: relative; z-index: 2;">
                🚀 JOIN OUR COMMUNITY
              </h3>
              
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; position: relative; z-index: 2;">
                If you have any urgent inquiries, join our Discord server for real-time support and community engagement!
              </p>
              
              <a href="https://discord.gg/8qpHgECDH3" style="display: inline-block; background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); color: #0a0a0a; text-decoration: none; font-weight: 700; font-size: 16px; padding: 15px 30px; border-radius: 25px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3); transition: all 0.3s ease; position: relative; z-index: 2;">
                🎮 JOIN DISCORD SERVER
              </a>
            </div>
            
            <!-- Footer Section -->
            <div style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%); border-top: 2px solid rgba(0, 212, 255, 0.3); padding: 25px; margin: 20px -30px -30px -30px; text-align: center;">
              <div style="display: inline-block; background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%); padding: 12px 25px; border-radius: 25px; margin-bottom: 15px;">
                <p style="margin: 0; color: #0a0a0a; font-weight: 600; font-size: 14px;">
                  🔒 MESSAGE RECEIVED
                </p>
              </div>
              
              <p style="margin: 0; color: #00d4ff; font-size: 14px; font-weight: 500;">
                Best regards, The HackSpire 2025 Team
              </p>
              <p style="margin: 5px 0 0 0; color: #888; font-size: 12px;">
                Timestamp: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Thank you for contacting us!

Dear ${name},

Thank you for reaching out to HackSpire 2025. We have received your message and will get back to you as soon as possible.

Your Message Summary:
- Subject: ${subject}
- Message: ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}

If you have any urgent inquiries, please feel free to reach out to us through our Discord server or other social media channels.

Join Our Discord Community: https://discord.gg/8qpHgECDH3

---
Best regards,
The HackSpire 2025 Team
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Message sent successfully! Check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error:
          "Failed to send message. Please try again later or contact us through Discord.",
      },
      { status: 500 }
    );
  }
}
