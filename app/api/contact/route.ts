import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, age, location, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !location || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Save to Google Sheets
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

      // Append row to sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Submissions!A:L', // Unified tab for both forms
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              new Date().toISOString(), // Timestamp
              'contact',                // Type
              name,                     // Name
              email,                    // Email
              phone,                    // Phone
              age || 'N/A',             // Child's Age
              location,                 // Location
              message,                  // Message
              '',                       // Service
              '',                       // Preferred Date
              '',                       // Preferred Time
              '',                       // Notes
            ],
          ],
        },
      });
    } catch (sheetError) {
      console.error('Google Sheets Error:', sheetError);
      // Continue even if sheets fails
    }

    // 2. Send Email Notification
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (resendApiKey) {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'DARC Contact Form <onboarding@resend.dev>', // Update with your verified domain
            to: ['ananthasv.1407@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Child's Age:</strong> ${age || 'Not provided'}</p>
              <p><strong>Preferred Location:</strong> ${location}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              <hr />
              <p><small>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</small></p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Email sending failed:', await emailResponse.text());
        }
      }
    } catch (emailError) {
      console.error('Email Error:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
