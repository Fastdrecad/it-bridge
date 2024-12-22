import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="container mx-auto p-8 mb-12">
      <Link href="/kontakt" className="text-warning-800 group relative py-1">
        Kontaktirajte nas
        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-warning-800 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
      </Link>{" "}
      kako biste dobili dodatne informacije i otklonili svaku nedoumicu.
    </div>
  );
}
