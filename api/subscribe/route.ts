import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName } = await req.json();

    const apiKey = process.env.MAILER_API_KEY;
    const url = "https://connect.mailerlite.com/api/subscribers";

    const response = await axios.post(
      url,
      {
        email: email,
        fields: {
          name: `${firstName} ${lastName}`,
          first_name: firstName,
          last_name: lastName
        },
        groups: [process.env.MAILER_LIST_ID]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${apiKey}`
        }
      }
    );

    console.log("MailerLite API response:", response.data);

    return NextResponse.json(
      {
        message:
          "Na email adresu poslali smo potvrdu vaše prijave. Proverite inbox i saznajte više o našim obukama."
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("MailerLite API error:", {
        status: error.response?.status,
        data: error.response?.data
      });
    }
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
