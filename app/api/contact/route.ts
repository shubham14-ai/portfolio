import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification to you
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'shu14mojad@gmail.com',
      subject: `🚀 New Portfolio Inquiry from ${name}`,
      replyTo: email,
      html: `
      <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; padding:24px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
          
          <h2 style="margin-top:0; color:#111827;">New Portfolio Contact</h2>
          <p style="color:#6b7280; font-size:14px;">You received a new message from your portfolio website.</p>
          
          <hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;" />

          <p><strong>Received At:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> 
            <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
              ${email}
            </a>
          </p>
          ${phone ? `<p><strong>Phone:</strong> 
            <a href="tel:${phone}" style="color:#2563eb; text-decoration:none;">
              ${phone}
            </a>
          </p>` : ''}

          <div style="margin-top:20px;">
            <strong>Message:</strong>
            <div style="margin-top:10px; padding:15px; background:#f3f4f6; border-radius:6px; white-space:pre-line;">
              ${message}
            </div>
          </div>

          <hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;" />

          <p style="font-size:12px; color:#9ca3af;">
            Sent from your portfolio contact form.
          </p>

        </div>
      </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { error: 'Email failed to send' },
      { status: 500 }
    );
  }
}