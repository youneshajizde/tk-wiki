import Link from "next/link";
import { kingdoms } from "@/data/kingdoms";

export default function WeaponsPage() {
  return (
    <main className="min-h-screen bg-[#090807] text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <Link
          href="/"
          className="text-[10px] uppercase tracking-[0.3em] text-stone-600 hover:text-amber-400"
        >
          ← The True Kingdom
        </Link>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500/60">
            The Archives
          </span>

          <h1 className="mt-5 font-serif text-5xl md:text-6xl">
            Weapons
          </h1>

          <p className="mt-5 text-sm leading-7 text-stone-500">
            Discover legendary swords, ancient relics and weapons whose names
            became part of history.
          </p>

          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-stone-700">
            Choose a kingdom
          </p>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kingdoms.map((kingdom) => (
            <Link
              key={kingdom.id}
              href={`/weapons/${kingdom.id}`}
              className="group rounded-3xl border border-white/5 bg-[#0d0c0a] p-8 text-center transition-all hover:-translate-y-1 hover:border-amber-400/20"
            >
              <div className="flex h-40 items-center justify-center">
                <img
                  src={kingdom.sigil}
                  alt={kingdom.name}
                  className="h-32 w-32 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100"
                />
              </div>

              <h2 className="font-serif text-xl group-hover:text-amber-100">
                {kingdom.name}
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-amber-500/50">
                {kingdom.subtitle}
              </p>

              <p className="mt-4 text-xs leading-5 text-stone-600">
                {kingdom.description}
              </p>

              <div className="mt-7 text-[9px] uppercase tracking-[0.3em] text-stone-700 group-hover:text-amber-400/60">
                Enter kingdom →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}