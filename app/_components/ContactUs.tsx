import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="container mx-auto p-8 mb-12">
      <Link href="/kontakt" className="underline text-warning-800">
        Kontaktirajte nas{" "}
      </Link>
      kako biste dobili prave informacije i otklonili svaku nedoumicu.
    </div>
  );
}
