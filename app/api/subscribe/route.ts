import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define response data type
type Data = { message?: string; error?: string };

// Email validation schema
const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

// Subscription handler function
export async function POST(req: NextRequest) {
  // 1. Validate email address
  const body = await req.json();
  const emailValidation = EmailSchema.safeParse(body.email);

  if (!emailValidation.success) {
    return NextResponse.json(
      { error: "Unesite ispravnu email adresu" },
      { status: 400 }
    );
  }

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!API_KEY || !API_SERVER || !AUDIENCE_ID) {
    return NextResponse.json(
      { error: "Missing Mailchimp environment variables" },
      { status: 500 }
    );
  }

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // 4. Prepare request data
  const data = {
    email_address: emailValidation.data,
    status: "subscribed",
    merge_fields: {
      FNAME: body.firstName,
      LNAME: body.lastName
    }
  };

  // 5. Set request headers
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
        "base64"
      )}`
    }
  };

  // 6. Send POST request to Mailchimp API
  try {
    const response = await axios.post(url, data, options);
    if (response.status === 200) {
      return NextResponse.json(
        { message: "Odlično! Uspešno ste se prijavili na naš newsletter!" },
        { status: 201 }
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `${error.response?.status}`,
        `${error.response?.data.title}`,
        `${error.response?.data.detail}`
      );

      if (error.response?.data.title === "Member Exists") {
        return NextResponse.json(
          {
            error: "Ovaj email je već prijavljen 🧐"
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      {
        error:
          "Oops! Došlo je do greške prilikom prijave. Molimo vas da nas kontaktirate putem emaila i mi ćemo vas ručno dodati na listu."
      },
      { status: 500 }
    );
  }
}
