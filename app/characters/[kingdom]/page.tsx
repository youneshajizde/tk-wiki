"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

import { kingdoms } from "@/data/kingdoms";
import { characters } from "@/data/characters";

export default function KingdomCharactersPage() {
  const params = useParams();

  const kingdomId = params.kingdom as string;

  const kingdom = kingdoms.find(
    (item) => item.id === kingdomId
  );

  const [search, setSearch] = useState("");

  const kingdomCharacters = characters[kingdomId] ?? [];

  const filteredCharacters = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return kingdomCharacters;
    }

    return kingdomCharacters.filter((character) => {
      const name = character.identity.name;
      const titles = character.identity.titles.join(" ");
      const role = character.identity.role;
      const kingdom = character.identity.kingdom;
      const overview = character.description.overview;

      return `${name} ${titles} ${role} ${kingdom} ${overview}`
        .toLowerCase()
        .includes(query);
    });
  }, [search, kingdomCharacters]);

  if (!kingdom) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#090807] text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-[0.25em] text-stone-700">
          <Link
            href="/"
            className="transition-colors hover:text-amber-400"
          >
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

          <span className="text-stone-500">
            {kingdom.name}
          </span>
        </div>

        {/* Header */}
        <div className="mt-20 flex flex-col gap-10 md:flex-row md:items-center">
          <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-3xl border border-white/5 bg-[#0d0c0a]">
            <img
              src={kingdom.sigil}
              alt={kingdom.name}
              className="h-28 w-28 object-contain"
            />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-amber-400/60">
              {kingdom.subtitle}
            </p>

            <h1 className="mt-3 font-serif text-5xl md:text-6xl">
              Characters
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-500">
              {kingdom.description}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mt-20 flex items-center gap-4 border-y border-white/5 py-5">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search characters..."
            className="w-full max-w-xl rounded-xl border border-white/5 bg-[#0d0c0a] px-5 py-4 text-sm outline-none placeholder:text-stone-700 focus:border-amber-400/30"
          />

          <span className="font-mono text-xs text-stone-700">
            {filteredCharacters.length}
          </span>
        </div>

        {/* Character Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {filteredCharacters.map((character) => {
            const name = character.identity.name;

            const title =
              character.identity.titles[0] ??
              character.identity.role;

            const overview = character.description.overview;

            return (
              <Link
                key={character.id}
                href={`/characters/${kingdomId}/${character.id}`}
                className="group flex min-h-[280px] overflow-hidden rounded-2xl border border-white/5 bg-[#0d0c0a] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/20"
              >
                {/* Portrait */}
                <div className="relative w-[38%] shrink-0 overflow-hidden">
                  <img
                    src={
                      character.image ??
                      "/images/character-1.jpg"
                    }
                    alt={name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image fade */}
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#0d0c0a]" />

                  {/* Image darkness */}
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-center p-6">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-amber-500/50">
                    {title}
                  </p>

                  <h2 className="mt-2 font-serif text-2xl leading-tight text-stone-100 transition-colors group-hover:text-amber-100">
                    {name}
                  </h2>

                  <div className="mt-4 h-px w-8 bg-amber-400/30 transition-all duration-300 group-hover:w-12 group-hover:bg-amber-400/60" />

                  <p className="mt-4 line-clamp-4 text-xs leading-6 text-stone-500">
                    {overview}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-stone-700 transition-colors group-hover:text-amber-400/70">
                    View character

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCharacters.length === 0 && (
          <div className="py-24 text-center text-stone-700">
            No characters found.
          </div>
        )}
      </div>
    </main>
  );
}