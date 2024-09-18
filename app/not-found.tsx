import Link from "next/link";
import Button from "./_components/common/Button/Button";
import NotFoundIcon from "@/app/_components/icons/NotFoundIcon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[91vh] bg-gradient-to-r to-[#15103E] from-[#A0C943]  px-4">
      <div className="text-center">
        <h1 className="mt-5 text-4xl font-bold text-white">
          Oops! Stranica nije pronađena.
        </h1>
        <p className="text-lg text-white mt-2">
          Izgleda da ne možemo da pronađemo stranicu koju tražite.
        </p>
        <Link href="/" className="mt-6 inline-block  ">
          <Button variant="primary" rounded>
            Vrati se nazad
          </Button>
        </Link>
      </div>
      <NotFoundIcon />
    </div>
  );
}
