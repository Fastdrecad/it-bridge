import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { ime, prezime, email, telefon, poruka } = await req.json();

  if (!ime || !prezime || !email || !poruka) {
    return NextResponse.json(
      { error: "Sva polja su obavezna." },
      { status: 400 }
    );
  }

  // Konfiguriši nodemailer sa Gmail SMTP serverom
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: email,
    to: "andrijas.micun@gmail.com",
    subject: `Nova poruka od ${ime} ${prezime}`,
    text: `Ime: ${ime}\nPrezime: ${prezime}\nEmail: ${email}\nTelefon: ${telefon}\n\nPoruka:\n${poruka}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Vaša poruka je uspešno poslata!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Greška pri slanju email-a:", error);
    return NextResponse.json(
      {
        error:
          "Došlo je do greške pri slanju vaše poruke. Molimo vas pokušajte ponovo kasnije."
      },
      { status: 500 }
    );
  }
}
