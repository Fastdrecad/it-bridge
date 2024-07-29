import Video from "@/app/_components/Video";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between relative">
        <Video />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="text-6xl text-primary-50 font-bold mb-10 tracking-tight leading-tight italic max-w-[700px] drop-shadow-lg">
            Naši kursevi formiraju vašu budućnost
          </h1>
          <Link
            href="/katalog-treninga"
            className="bg-indigo-950 px-8 py-6 text-primary-50 text-lg font-semibold hover:bg-indigo-900 transition-all rounded-full"
          >
            KATALOG TRENINGA
          </Link>
        </div>
      </div>
      <div className="text-left max-w-7xl mx-auto w-full">
        <h2 className="relative text-4xl font-extrabold my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-10 after:h-1 after:bg-green-400">
          O NAMA
        </h2>

        <p className="mb-5 text-lg">
          Mi smo Vaš pouzdani partner u transformaciji kroz obuke, edukaciju i
          unapređenje poslovanja. Pružamo podršku i stručnost kako biste
          ostvarili pun potencijal vaših timova.
        </p>
        <p className="mb-5 text-lg">
          Svakoj kompaniji pristupamo na autentičan način jer verujemo da je
          svaka kompanija jedinstvena. Pažljivo se obraćamo svakom klijentu i
          razumemo specifičnosti njihovih potreba, što dovodi do dubljeg i
          efikasnijeg partnerstva.
        </p>
        <p className="mb-5 text-lg">
          Naša suštinska svrha je vaše zadovoljstvo našim obukama, koje dovode
          do konkretne transformacije i postizanja željenih rezultata.
        </p>
        <p className="mb-5 text-lg">
          Kroz posvećeno mentorstvo, interaktivne sesije i podršku, gradimo vezu
          koja prevazilazi granice kursa, postižući ciljeve zajedno. Svaki modul
          je pažljivo osmišljen da vam pruži praktično iskustvo i vrednost koja
          prevazilazi očekivanja.agna aliqua.
        </p>
        <h2 className="relative text-4xl font-extrabold my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-10 after:h-1 after:bg-green-400">
          KURSEVI
        </h2>
      </div>
    </>
  );
}
