# Contact Form Setup Instructions

## Prerequisites
- Google Cloud Console account
- Resend account (or alternative email service)
- Google Sheet for storing submissions

## Step 1: Install Dependencies

```bash
npm install googleapis
```

## Step 2: Google Sheets Setup

### 2.1 Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2.2 Create Service Account
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in details and click "Create"
4. Skip optional steps and click "Done"
5. Click on the created service account
6. Go to "Keys" tab
7. Click "Add Key" > "Create new key"
8. Choose "JSON" format and download the file

### 2.3 Prepare Google Sheet
1. Create a new Google Sheet
2. Add a single tab named `Submissions` with headers:
   `Timestamp | Type | Name | Email | Phone | Child's Age | Location | Message | Service | Preferred Date | Preferred Time | Notes`
3. Copy the Spreadsheet ID from URL (between `/d/` and `/edit`):
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```
4. **Important:** Share the sheet with the service account email (found in the JSON file as `client_email`)
   - Click "Share" button
   - Paste the service account email
   - Give "Editor" permission

## Step 3: Email Service Setup (Resend)

### 3.1 Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Go to "API Keys" section
4. Create a new API key
5. Copy the key (starts with `re_`)

### 3.2 (Optional) Add Custom Domain
- Follow Resend docs to verify your domain
- Update the `from` field in `/app/api/contact/route.ts` to use your domain
- Default uses `onboarding@resend.dev` which works for testing

## Step 4: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in:
   - `GOOGLE_SHEETS_CLIENT_EMAIL`: From JSON file (`client_email`)
   - `GOOGLE_SHEETS_PRIVATE_KEY`: From JSON file (`private_key`) - keep quotes and newlines
   - `GOOGLE_SHEETS_SPREADSHEET_ID`: From Google Sheets URL
   - `RESEND_API_KEY`: From Resend dashboard
   - `BOOKING_NOTIFY_EMAILS` (optional): Comma-separated emails for booking notifications

Example:
```env
GOOGLE_SHEETS_CLIENT_EMAIL=contact-form@my-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1a2b3c4d5e6f7g8h9i0j
RESEND_API_KEY=re_123abc456def789
```

## Step 5: Test the Form

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contactus` page
3. Fill out and submit the form
4. Check:
   - Google Sheet for new row
   - Email inbox (themomscare365@gmail.com) for notification

## Troubleshooting

### Google Sheets Error
- Verify service account has access to the sheet
- Check private key formatting (keep `\n` characters)
- Ensure Google Sheets API is enabled

### Email Not Sending
- Verify Resend API key is correct
- Check Resend dashboard for logs
- For production, verify your domain in Resend

### Submissions Sheet Not Updating
- Ensure a tab named `Submissions` exists with the listed headers
- Verify service account access to the sheet

### Form Submission Fails
- Check browser console for errors
- Check server logs: `npm run dev`
- Verify all required fields are filled

## Alternative Email Services

If you prefer a different email service, update `/app/api/contact/route.ts`:

### SendGrid
```typescript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
await sgMail.send({ ... });
```

### Nodemailer (Gmail)
```typescript
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({ ... });
await transporter.sendMail({ ... });
```

## Security Notes

- **Never commit `.env.local`** (already in .gitignore)
- Keep service account JSON file secure
- Rotate API keys if exposed
- Use environment variables in production (Vercel, etc.)
