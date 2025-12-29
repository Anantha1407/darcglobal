import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      service,
      preferredDate,
      preferredTime,
      name,
      email,
      phone,
      location,
      notes,
    } = body;

    if (!service || !preferredDate || !preferredTime || !name || !email || !phone || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    // 1) Append to Google Sheet (Bookings tab)
    if (clientEmail && privateKey && spreadsheetId) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: clientEmail,
            private_key: privateKey,
          },
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: "Submissions!A:L", // Unified tab for both forms
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                new Date().toISOString(), // Timestamp
                "booking",                // Type
                name,                      // Name
                email,                     // Email
                phone,                     // Phone
                "",                        // Child's Age (N/A for booking)
                location,                  // Location
                "",                        // Message (N/A for booking)
                service,                   // Service
                preferredDate,             // Preferred Date
                preferredTime,             // Preferred Time
                notes || "",               // Notes
              ],
            ],
          },
        });
      } catch (sheetError) {
        console.error("Google Sheets (booking) error:", sheetError);
      }
    }

    // 2) Send notification email (Resend)
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      const notifyEmails = process.env.BOOKING_NOTIFY_EMAILS?.split(",")
        .map((e) => e.trim())
        .filter(Boolean) ?? ["ananthasv.1407@gmail.com"];

      if (resendApiKey) {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "DARC Bookings <onboarding@resend.dev>",
            to: notifyEmails,
            subject: `New Booking: ${name} (${service})`,
            html: `
              <h2>New Booking Request</h2>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Date:</strong> ${preferredDate}</p>
              <p><strong>Time:</strong> ${preferredTime}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Location:</strong> ${location}</p>
              <p><strong>Notes:</strong> ${notes || "(none)"}</p>
              <hr />
              <p><small>Submitted at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</small></p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error("Booking email failed:", await emailResponse.text());
        }
      }
    } catch (emailError) {
      console.error("Booking email error:", emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Booking route error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
