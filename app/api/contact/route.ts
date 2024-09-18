import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Email configuration from environment variables
const senderEmail = process.env.SMTP_USER!;
const senderPassword = process.env.SMTP_PASSWORD!;
const recipientEmail = "andrija@andrijadesign.com";

export async function POST(req: Request) {
  try {
    const { ime, prezime, email, telefon, poruka } = await req.json();

    if (!ime || !prezime || !email || !poruka) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 587,
      auth: {
        user: senderEmail,
        pass: senderPassword
      }
    });

    // Create the email options
    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: `Kontakt from ${ime} ${prezime}`,
      text: `Ime: ${ime}\nPrezime: ${prezime}\nEmail: ${email}\nTelefon: ${telefon}\n\nPoruka:\n${poruka}`,
      html: `<p><strong>Ime:</strong> ${ime}</p><p><strong>Prezime:</strong> ${prezime}</p><p><strong>Email:</strong> ${email}</p><p><strong>Telefon:</strong> ${telefon}</p><p><strong>Poruka:</strong> ${poruka}</p>`
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.", info);

    // You can implement the IMAP logic to append to the "Sent" folder here if needed

    return NextResponse.json(
      { message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
