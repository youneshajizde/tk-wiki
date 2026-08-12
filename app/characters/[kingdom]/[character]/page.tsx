"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { kingdoms } from "@/data/kingdoms";
import { characters } from "@/data/characters";

export default function CharacterDetailsPage() {
  const params = useParams();

  const kingdomId = params.kingdom as string;
  const characterId = params.character as string;

  const kingdom = kingdoms.find((item) => item.id === kingdomId);

  const kingdomCharacters = characters[kingdomId] ?? [];

  const character = kingdomCharacters.find((item) => item.id === characterId);

  if (!kingdom || !character) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090807] text-stone-100">
        <div className="text-center">
          <h1 className="font-serif text-4xl">Character Not Found</h1>

          <Link
            href="/characters"
            className="mt-6 inline-block text-[10px] uppercase tracking-[0.25em] text-amber-400"
          >
            Return to Characters →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090807] text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-[0.25em] text-stone-700">
          <Link href="/" className="transition-colors hover:text-amber-400">
            The True Kingdom
          </Link>

          <span>/</span>

          <Link
            href="/characters"
            className="transition-colors hover:text-amber-400"
          >
            Characters
          </Link>

          <span>/</span>

          <Link
            href={`/characters/${kingdomId}`}
            className="transition-colors hover:text-amber-400"
          >
            {kingdom.name}
          </Link>

          <span>/</span>

          <span className="text-stone-500">{character.name}</span>
        </div>

        {/* Character Hero */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-white/5 bg-[#0d0c0a]">
          <div className="grid lg:grid-cols-[45%_55%]">
            {/* Image */}
            <div className="relative min-h-[550px] overflow-hidden lg:min-h-[700px]">
              {character.image && (
                <img
                  src={character.image}
                  alt={character.name}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              )}

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d0c0a]" />

              {/* Kingdom label */}
              <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-300/70">
                  {kingdom.name}
                </span>
              </div>
            </div>

            {/* Character information */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400/50" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-amber-400/60">
                  Character Chronicle
                </span>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-amber-500/50">
                {character.title}
              </p>

              <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-stone-100 md:text-6xl lg:text-7xl">
                {character.name}
              </h1>

              <div className="mt-8 h-px w-16 bg-amber-400/30" />

              <p className="mt-8 max-w-xl text-sm leading-8 text-stone-400">
                {character.description}
              </p>

              {/* Character metadata */}
              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5">
                <div className="bg-[#11100d] p-5">
                  <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                    Kingdom
                  </div>

                  <div className="mt-2 font-serif text-lg text-stone-300">
                    {kingdom.name}
                  </div>
                </div>

                <div className="bg-[#11100d] p-5">
                  <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                    Title
                  </div>

                  <div className="mt-2 font-serif text-lg text-stone-300">
                    {character.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lore */}
        <section className="mx-auto mt-24 max-w-4xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/5" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-amber-400/50">
              The Chronicle
            </span>

            <div className="h-px flex-1 bg-white/5" />
          </div>

          <h2 className="font-serif text-4xl text-stone-200">
            The Story of {character.name}
          </h2>

          <p className="mt-8 text-sm leading-8 text-stone-500">
            {character.description}
          </p>

          {/* Placeholder lore sections */}
          <div className="mt-16 space-y-16">
            <div>
              <span className="font-mono text-[9px] text-amber-400/50">I</span>

              <h3 className="mt-3 font-serif text-2xl text-stone-300">
                Early Life
              </h3>

              <p className="mt-4 text-sm leading-8 text-stone-600">
                The early years of {character.name}&apos;s life remain to be written
                in the chronicles.
              </p>
            </div>

            <div>
              <span className="font-mono text-[9px] text-amber-400/50">II</span>

              <h3 className="mt-3 font-serif text-2xl text-stone-300">
                Rise to Power
              </h3>

              <p className="mt-4 text-sm leading-8 text-stone-600">
                The events that shaped {character.name} and their rise within{" "}
                {kingdom.name} will be recorded here.
              </p>
            </div>

            <div>
              <span className="font-mono text-[9px] text-amber-400/50">
                III
              </span>

              <h3 className="mt-3 font-serif text-2xl text-stone-300">
                Legacy
              </h3>

              <p className="mt-4 text-sm leading-8 text-stone-600">
                The legacy of {character.name} continues to influence the
                kingdoms long after their time.
              </p>
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="mt-24 border-t border-white/5 pt-8">
          <Link
            href={`/characters/${kingdomId}`}
            className="inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-stone-600 transition-colors hover:text-amber-400"
          >
            ← Back to {kingdom.name} characters
          </Link>
        </div>
      </div>
    </main>
  );
}
